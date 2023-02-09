<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNav from '@/components/layout/TheNav.vue';
</script>

<template>
  <header>
    <TheNav />
  </header>
  <main class="container mx-auto mt-16">
    <RouterView />
  </main>
</template>

<style scoped></style>
