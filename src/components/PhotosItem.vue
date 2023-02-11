<script lang="ts" setup>
import { capitalize, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { IPhotoResponse } from '@/types/photos.types';

export interface IProps {
  photo: IPhotoResponse;
}

const router = useRouter();

const author: string = 'Danil Listov';
const album: string = 'Japan, Tokyo';

const props = withDefaults(defineProps<IProps>(), {
  photo: () => ({} as IPhotoResponse),
});

const title = computed(() => {
  return capitalize(props?.photo?.title);
});

function navigateToPhotoPage(): void {
  router.push({
    name: 'post',
    params: {
      id: props?.photo?.id,
    },
  });
}
</script>

<template>
  <a href="#" class="photos-item" @click.prevent="navigateToPhotoPage">
    <img
      class="photos-item__image h-96 w-full mb-5 object-cover rounded-xl"
      :src="photo.url"
    />

    <div class="photos-item__disc">
      <div
        class="photos-item__meta uppercase text-base font-light mb-1.5 text-stone-300"
      >
        By
        <a href="#" class="text-stone-500 hover:text-stone-600">{{ author }}</a>
        in
        <a href="#" class="text-stone-500 hover:text-stone-600">{{ album }}</a>
      </div>
      <div class="photos-item__title text-5xl font-light normal-case">
        {{ title }}
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.photos-item {
  width: 100%;

  &__title {
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover &__title {
    color: #57534e;
  }
}
</style>
