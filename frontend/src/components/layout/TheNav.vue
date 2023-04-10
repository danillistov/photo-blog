<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePhotosStore } from '@/stores/PhotosStore';
import { scrollDirectionHandler } from '@/helpers';
import SearchInput from '@/components/SearchInput.vue';

const navigation = ref([
  { name: 'New', href: '#', current: true },
  { name: 'Albums', href: '#', current: false },
]);

const photoStore = usePhotosStore();
const { getSearchInputStatus: isSearchInputEnabled } = storeToRefs(photoStore);

const navIsShown = ref(true);

function showNavBar(): void {
  navIsShown.value = true;
}

function hideNavBar(): void {
  navIsShown.value = false;
}

onMounted(async () => {
  scrollDirectionHandler(showNavBar, hideNavBar);
});
</script>

<template>
  <Disclosure
    as="nav"
    class="the-nav fixed top-0 left-0 w-full bg-stone-900 z-10"
    :class="{ '_is-hidden': !navIsShown }"
    v-slot="{ open }"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="/moon-logo.png"
              alt="Photo blog"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="/moon-logo.png"
              alt="Photo blog"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-gray-200 text-black'
                    : 'text-white hover:bg-gray-200 hover:text-black',
                  'px-3 py-2 rounded-md text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>

        <SearchInput :is-search-enabled="isSearchInputEnabled" />
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style lang="scss" scoped>
.the-nav {
  transform: translateY(0);
  transition: 0.5s ease-in-out;

  &._is-hidden {
    transform: translateY(-100%);
  }
}
</style>
