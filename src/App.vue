<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNav from '@/components/layout/TheNav.vue';
import LoadingOverlay from './components/LoadingOverlay.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isLoading = computed(() => {
  return store.getters['getLoadingOverlayState'] ?? true;
});
</script>

<template>
  <header>
    <TheNav />
  </header>
  <main
    class="main container mx-auto mt-16"
    :class="isLoading ? 'overflow-hidden _is-loading' : ''"
  >
    <LoadingOverlay />
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
