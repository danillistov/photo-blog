<script lang="ts" setup>
import { onMounted, computed } from 'vue';
import type { ComputedRef } from 'vue';
import { usePhotoStore } from '@/stores/PhotoStore';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();

const photoStore = usePhotoStore();
const { getCurrentPhoto: currentPhoto } = storeToRefs(photoStore);
const { fetchPhotoById } = photoStore;

onMounted(async () => {
  await fetchPhotoById(route.params.id);
});
</script>
<template>
  <div class="photo-page">{{ currentPhoto.title }}</div>
</template>
