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
      let filteredPhotos = [];

      const filters = {
        search: (photo: IPhotoResponse) =>
          photo.title.toLowerCase().includes(state.search.toLowerCase()),
      };

      filteredPhotos = state.photos.filter(filters.search);

      return filteredPhotos.splice(0, 10);
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
