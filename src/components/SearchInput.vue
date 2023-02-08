<script setup lang="ts">
import { ref } from 'vue';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/20/solid';

const open = ref(false);
const searchEl = ref<HTMLInputElement>();

function changeSearchState(state: boolean = false): void {
  open.value = state;
  if (state) {
    searchEl.value?.focus();
  }
}
</script>

<template>
  <div
    class="input-box hidden sm:flex overflow-hidden h-full max-h-9 items-center bg-gray-200 px-2 rounded-md transition-all duration-300"
    :class="{ _open: open }"
    v-click-outside="changeSearchState"
  >
    <span class="pr-2">
      <Transition name="fade" mode="out-in">
        <MagnifyingGlassIcon
          v-if="!open"
          class="h-6 cursor-pointer"
          @click="changeSearchState(true)"
        />
        <XMarkIcon
          v-else
          class="h-6 cursor-pointer"
          @click="changeSearchState(false)"
        />
      </Transition>
    </span>
    <input
      ref="searchEl"
      type="text"
      class="bg-gray-200 px-1 outline-none"
      placeholder="Search..."
      @focus="changeSearchState(true)"
      @blur="changeSearchState(false)"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-box {
  max-width: 40px;

  &._open {
    max-width: 100%;
  }
}
</style>
