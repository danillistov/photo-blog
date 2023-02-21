<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const loadingState = computed(() => store.getters['getLoadingOverlayState']);
const loadingMessage = computed(
  () => store.getters['getLoadingOverlayMessage']
);
</script>

<template>
  <div
    class="loading-overlay bg-stone-300 fixed left-0 min-w-full opacity-80 justify-center items-center"
    :class="!loadingState ? 'flex' : 'hidden'"
  >
    {{ loadingMessage }}
  </div>
</template>

<style lang="scss" scoped>
.loading-overlay {
  height: calc(100vh - 64px);
}
</style>
