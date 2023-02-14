<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNav from '@/components/layout/TheNav.vue';
import LoadingOverlay from './components/LoadingOverlay.vue';
</script>

<template>
  <header>
    <TheNav />
  </header>
  <main class="container mx-auto mt-16">
    <LoadingOverlay />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped></style>
