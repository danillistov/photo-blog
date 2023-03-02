<script lang="ts" setup>
import PhotosItem from '@/components/PhotosItem.vue';
import type { IPhotoResponse } from '@/types/photos.types';
import EmptyMessage from './EmptyMessageStub.vue';

export interface IPhotosProps {
  photos: Array<IPhotoResponse>;
  emptyListMessage?: string;
}

withDefaults(defineProps<IPhotosProps>(), {
  photos: () => [],
  emptyListMessage: 'The photo list is currently empty.',
});
</script>

<template>
  <div class="photos-list flex flex-col items-center w-full mx-auto p-12">
    <template v-if="photos && photos.length">
      <PhotosItem
        v-for="photo in photos"
        :key="photo.id"
        :photo="photo"
        class="mb-20"
      />
    </template>

    <template v-else>
      <EmptyMessage :message="emptyListMessage" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.photos-list {
  max-width: 750px;
}
</style>
