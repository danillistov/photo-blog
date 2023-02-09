<script lang="ts" setup>
import PhotosItem from '@/components/PhotosItem.vue';
import type { IPhotoResponse } from '@/types/photos.types';

export interface IProps {
  photos: Array<IPhotoResponse>;
}

const props = withDefaults(defineProps<IProps>(), {
  photos: () => [],
});
</script>

<template>
  <div class="photos-list flex flex-col items-center p-5">
    <div v-for="photo in photos" :key="photo.id" class="mb-5">
      <PhotosItem :photo="photo" />
    </div>
  </div>
</template>
