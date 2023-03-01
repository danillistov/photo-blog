import type { GetterTree } from 'vuex';
import type { State } from './state';
import type { RootState } from '@/store';
import type { IPhotoResponse } from '@/types/photos.types';

export type Getters = {
  getPhotos(state: State): IPhotoResponse[];
  getFilteredPhotos(state: State): IPhotoResponse[];
  getSearchInputStatus(state: State): boolean;
};

export const getters: GetterTree<State, RootState> & Getters = {
  getPhotos: (state) => state.photos,

  getFilteredPhotos: (state) => {
    const filters = {
      search: (photo: IPhotoResponse) =>
        photo.title.toLowerCase().includes(state.search.toLowerCase()),
    };

    const filteredPhotos = state.photos.filter(filters.search);

    return filteredPhotos ?? [];
  },

  getSearchInputStatus(state) {
    return state.searchIsEnabled;
  },
};
