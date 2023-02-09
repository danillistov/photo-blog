<script lang="ts" setup>
import type { IPhotoResponse } from '@/types/photos.types';

export interface IProps {
  photo: IPhotoResponse;
}

const props = withDefaults(defineProps<IProps>(), {
  photo: () => ({} as IPhotoResponse),
});

console.log(props.photo);
</script>

<template>
  <div class="photos-item">{{ photo.title }}</div>
</template>
