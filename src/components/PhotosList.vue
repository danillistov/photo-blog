<script lang="ts" setup>
import PhotosItem from '@/components/PhotosItem.vue';
import type { IPhotoResponse } from '@/types/photos.types';

export interface IProps {
  photos: Array<IPhotoResponse>;
}

withDefaults(defineProps<IProps>(), {
  photos: () => [],
});
</script>

<template>
  <div class="photos-list flex flex-col items-center w-full mx-auto p-12">
    <PhotosItem
      v-for="photo in photos"
      :key="photo.id"
      :photo="photo"
      class="mb-20"
    />
  </div>
</template>

<style lang="scss" scoped>
.photos-list {
  max-width: 750px;
}
</style>
