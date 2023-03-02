<script lang="ts" setup>
import { ArrowPathIcon } from '@heroicons/vue/20/solid';

defineProps<{
  message: string;
}>();
</script>

<template>
  <div
    class="absolute left-1/2 top-1/2 translate-x-[-50%] flex flex-col align-center justify-center text-xl text-center"
  >
    <ArrowPathIcon class="h-16 mb-4 animate-spin" />
    {{ message }}
  </div>
</template>
