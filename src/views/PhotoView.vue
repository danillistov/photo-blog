<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import type { ComputedRef } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import type { IPhotoResponse } from '@/types/photos.types';

const store = useStore();
const route = useRoute();
const currentPhoto: ComputedRef<IPhotoResponse> = computed(() => {
  return store.getters['photo/getCurrentPhoto'] ?? {};
});

onMounted(async () => {
  await store.dispatch('photo/fetchPhotoById', route.params.id);
});
</script>
<template>
  <div class="photo-page">{{ currentPhoto.title }}</div>
</template>
