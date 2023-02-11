import { createStore } from 'vuex';

import { store as photos } from '@/store/modules/photos';
import { store as photo } from '@/store/modules/photo';
import type { PhotosStore } from '@/store/modules/photos';
import type { PhotoStore } from '@/store/modules/photo';

export interface RootState {
  photos: PhotosStore;
  photo: PhotoStore;
}

export type Store = PhotosStore<Pick<RootState, 'photos'>> &
  PhotoStore<Pick<RootState, 'photo'>>;

export const store = createStore({
  modules: {
    photos,
    photo,
  },
});

export function useStore() {
  return store as Store;
}
