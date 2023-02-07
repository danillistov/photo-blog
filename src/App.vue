<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNav from '@/components/layout/TheNav.vue';
</script>

<template>
  <header>
    <TheNav />
  </header>

  <RouterView />
</template>

<style scoped></style>
