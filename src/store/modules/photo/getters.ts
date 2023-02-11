import type { GetterTree } from 'vuex';
import type { State } from './state';
import type { RootState } from '@/store';
import type { IPhotoResponse } from '@/types/photos.types';

export type Getters = {
  getPhotos(state: State): IPhotoResponse;
};

export const getters: GetterTree<State, RootState> & Getters = {
  getPhotos: (state) => state.currentPhoto,
};
