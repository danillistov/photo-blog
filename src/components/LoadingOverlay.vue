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
  <div class="loading-overlay hidden"></div>
</template>
