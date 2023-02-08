<script setup lang="ts">
import { onMounted, computed } from 'vue';
import type { ComputedRef } from 'vue';
import { useStore } from 'vuex';
import type { IPhotoResponse } from '@/types/photos.types';

const store = useStore();
const photos: ComputedRef<IPhotoResponse[]> = computed(
  () => store.getters.getFilteredPhotos
);

onMounted(async () => {
  await store.dispatch('fetchPhotos');
});
</script>

<template>
  <main>
    <div v-for="photo in photos" :key="photo.id">{{ photo.title }}</div>
  </main>
</template>
