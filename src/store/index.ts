import { createStore } from 'vuex';

import { store as photos } from '@/store/modules/photos';
import type { PhotosStore } from '@/store/modules/photos';

export interface RootState {
  photos: PhotosStore;
}

const store = createStore({
  modules: {
    photos,
  },
});

export default store;
