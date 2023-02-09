import { createStore } from 'vuex';
import type { IPhotoResponse } from '@/types/photos.types';
import { fetchAllPhotos } from '@/api';

const store = createStore({
  state: {
    photos: [] as IPhotoResponse[],
    search: '',
  },

  getters: {
    getPhotos: (state) => state.photos,

    getFilteredPhotos: (state) => {
      const splicedPhotos = state.photos.slice(0, 10);
      let filteredPhotos = [];

      const filters = {
        search: (photo: IPhotoResponse) =>
          photo.title.toLowerCase().includes(state.search.toLowerCase()),
      };

      filteredPhotos = splicedPhotos.filter(filters.search);

      return filteredPhotos;
    },
  },

  actions: {
    fetchPhotos: async ({ commit }) => {
      const photos = await fetchAllPhotos();

      commit('SET_PHOTOS', photos);
    },

    setSearchString: ({ commit }, search: string) => {
      commit('SET_SEARCH', search);
    },
  },

  mutations: {
    SET_PHOTOS: (state, payload) => {
      state.photos = payload;
    },

    SET_SEARCH: (state, payload) => {
      state.search = payload;
    },
  },
});

export default store;
