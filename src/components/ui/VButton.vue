<script lang="ts" setup>
import { computed } from 'vue';

type Theme = 'dark' | 'light';

const props = withDefaults(
  defineProps<{
    theme?: Theme;
  }>(),
  {
    theme: 'dark',
  }
);

const currentTheme = computed(() => {
  interface IThemes {
    [key: string]: string;
  }

  const themesStyleSet: IThemes = {
    dark: 'bg-stone-900 text-white outline-grey-200',
    light: 'b-gray-200 outline-stone-900',
  };

  return themesStyleSet[props.theme];
});
</script>

<template>
  <button
    class="v-button p-4 rounded-md hover:opacity-80 transition"
    :class="currentTheme"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
