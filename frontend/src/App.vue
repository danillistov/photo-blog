<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNav from '@/components/layout/TheNav.vue';
import LoadingOverlay from './components/LoadingOverlay.vue';
import { useLoadingOverlayStore } from '@/stores/LoadingOverlayStore';
import { storeToRefs } from 'pinia';

const loading = useLoadingOverlayStore();

const {
  getLoadingOverlayState: isLoading,
  getLoadingOverlayMessage: loadingMessage,
} = storeToRefs(loading);
</script>

<template>
  <header>
    <TheNav />
  </header>
  <main
    class="main relative container mx-auto my-16 min-h-content"
    :class="isLoading ? 'overflow-hidden _is-loading' : ''"
  >
    <Transition name="loading">
      <LoadingOverlay
        v-if="isLoading"
        :state="isLoading"
        :message="loadingMessage"
      />
    </Transition>

    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style lang="scss" scoped>
.main._is-loading {
  max-height: calc(100vh - 64px);
}
</style>
