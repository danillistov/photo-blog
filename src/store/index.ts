import { createStore } from 'vuex';
import type { MutationTree, ActionTree } from 'vuex';

import { store as photos } from '@/store/modules/photos';
import { store as photo } from '@/store/modules/photo';
import type { PhotosStore } from '@/store/modules/photos';
import type { PhotoStore } from '@/store/modules/photo';
import { MutationsTypes } from './mutations.types';
import { ActionsTypes } from './actions.types';

interface ILoading {
  state: boolean;
  message: string;
}

export interface RootState {
  loading: ILoading;
  photos?: PhotosStore;
  photo?: PhotoStore;
}

export type Store = PhotosStore<Pick<RootState, 'photos'>> &
  PhotoStore<Pick<RootState, 'photo'>>;

const state: RootState = {
  loading: {
    state: false,
    message: '',
  },
};

const actions: ActionTree<RootState, RootState> = {
  [ActionsTypes.CHANGE_LOADING_OVERLAY_STATE]({ commit }, view: ILoading) {
    commit(MutationsTypes.SET_LOADING_STATE, { ...view });
  },
};

const mutations: MutationTree<RootState> = {
  [MutationsTypes.SET_LOADING_STATE](state, payload: ILoading) {
    state.loading = payload;
  },
};

export const store = createStore({
  state,
  actions,
  mutations,
  modules: {
    photos,
    photo,
  },
});

export function useStore(): Store {
  return store as Store;
}
