import type { MutationTree } from 'vuex';
import { MutationTypes } from './mutations.types';
import type { IPhotoResponse } from '@/types/photos.types';
import type { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_PHOTOS](state: S, payload: IPhotoResponse[]): void;
  [MutationTypes.SET_SEARCH](state: S, payload: string): void;
  [MutationTypes.SET_SEARCH_INPUT_STATE](state: S, payload: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_PHOTOS]: (state, payload) => {
    state.photos = payload;
  },

  [MutationTypes.SET_SEARCH]: (state, payload) => {
    state.search = payload;
  },

  [MutationTypes.SET_SEARCH_INPUT_STATE]: (state, payload) => {
    state.searchIsEnabled = payload;
  },
};
