<script setup lang="ts">
import { onMounted, computed, ref, nextTick } from 'vue';
import type { ComputedRef } from 'vue';
import { useStore } from 'vuex';
import type { IPhotoResponse } from '@/types/photos.types';
import PhotosList from '@/components/PhotosList.vue';
import Pagination from '@/components/ThePagination.vue';

const store = useStore();
const photos: ComputedRef<IPhotoResponse[]> = computed(
  () => store.getters['photos/getFilteredPhotos'] ?? []
);

const currentLimit = ref(15);

const limitedPhotos: ComputedRef<IPhotoResponse[]> = computed(() => {
  return photos.value.slice(0, currentLimit.value);
});

async function changeCurrentLimitValue(newLimit: number) {
  currentLimit.value = newLimit;

  await nextTick();

  window.scrollBy({
    top: 400,
    left: 0,
    behavior: 'smooth',
  });
}

onMounted(async () => {
  await store.dispatch('photos/fetchPhotos', {
    message: 'Loading photos...',
  });
});
</script>

<template>
  <div>
    <PhotosList v-if="photos?.length" :photos="limitedPhotos" />
    <Pagination
      v-if="photos?.length && photos?.length > currentLimit"
      :photos-count="photos.length"
      :current-limit="currentLimit"
      class="block mx-auto"
      @change-limit="changeCurrentLimitValue"
    />
  </div>
</template>
