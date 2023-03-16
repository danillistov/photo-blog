import type { MutationTree } from 'vuex';
import { MutationTypes } from './mutations.types';
import type { IPhotoResponse } from '@/types/photos.types';
import type { State } from './state';

export type Mutations<S = State> = {
  [MutationTypes.SET_CURRENT_PHOTO](state: S, payload: IPhotoResponse): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_CURRENT_PHOTO]: (state, payload) => {
    state.currentPhoto = payload;
  },
};
