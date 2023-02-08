import { createStore } from 'vuex';
import type { IPhotoResponse } from '@/types/photos.types';
import { fetchAllPhotos } from '@/api';

const store = createStore({
  state: {
    photos: [] as IPhotoResponse[],
  },

  getters: {
    getPhotos: (state) => state.photos,
  },

  actions: {
    fetchPhotos: async ({ commit }) => {
      const photos = await fetchAllPhotos();

      commit('SET_PHOTOS', photos);
    },
  },

  mutations: {
    SET_PHOTOS: (state, payload) => {
      state.photos = payload;
    },
  },
});

export default store;
