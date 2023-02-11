import type { GetterTree } from 'vuex';
import type { State } from './state';
import type { RootState } from '@/store';
import type { IPhotoResponse } from '@/types/photos.types';

export type Getters = {
  getPhotos(state: State): IPhotoResponse[];
  getFilteredPhotos(state: State): IPhotoResponse[];
};

export const getters: GetterTree<State, RootState> & Getters = {
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
};
