<script setup lang="ts">
import { onMounted, computed, ref, nextTick } from 'vue';
import type { ComputedRef } from 'vue';
import { storeToRefs } from 'pinia';
import { usePhotosStore } from '@/stores/PhotosStore';

import type { IPhotoResponse } from '@/types/photos.types';

import PhotosList from '@/components/PhotosList.vue';
import Pagination from '@/components/ThePagination.vue';

const photosStore = usePhotosStore();

const { getFilteredPhotos: photos } = storeToRefs(photosStore);
const { fetchPhotos } = photosStore;

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
  await fetchPhotos();
});
</script>

<template>
  <div class="flex flex-col">
    <PhotosList :photos="limitedPhotos" />

    <Pagination
      v-if="photos?.length && photos?.length > currentLimit"
      :photos-count="photos.length"
      :current-limit="currentLimit"
      class="block mx-auto"
      @change-limit="changeCurrentLimitValue"
    />
  </div>
</template>
