<script lang="ts" setup>
import { computed } from 'vue';
import VButton from '@/components/ui/VButton.vue';

const props = defineProps<{
  photosCount: number;
  currentLimit: number;
}>();

const step = 15;

const newLimitStep = computed(() => {
  return props.photosCount - props.currentLimit < step
    ? props.photosCount - props.currentLimit
    : step;
});
</script>

<template>
  <VButton @click="$emit('change-limit', currentLimit + newLimitStep)">
    Show {{ newLimitStep }} more photos
  </VButton>
</template>
