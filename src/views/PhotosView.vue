<script setup lang="ts">
import { onMounted, computed } from 'vue';
import type { ComputedRef } from 'vue';
import { useStore } from 'vuex';
import type { IPhotoResponse } from '@/types/photos.types';
import PhotosList from '@/components/PhotosList.vue';

const store = useStore();
const photos: ComputedRef<IPhotoResponse[]> = computed(
  () => store.getters['photos/getFilteredPhotos'] ?? []
);

onMounted(async () => {
  await store.dispatch('photos/fetchPhotos');
});
</script>

<template>
  <PhotosList v-if="photos?.length" :photos="photos" />
</template>
