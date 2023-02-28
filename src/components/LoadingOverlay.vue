<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    state?: boolean;
    message?: string;
  }>(),
  {
    state: false,
    message: 'Loading...',
  }
);
</script>

<template>
  <div
    id="loading-overlay"
    class="flex bg-stone-300 fixed left-0 min-w-full opacity-80 justify-center items-center"
    v-show="props.state"
  >
    <div class="flex flex-col items-center justify-center">
      <div
        class="loading-icon w-14 h-14 bg-cover mb-5"
        style="background-image: url('/rolling-loading.svg')"
      ></div>
      <span v-if="props.message">{{ props.message }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#loading-overlay {
  height: calc(100vh - 64px);
  z-index: 10;
}
</style>
