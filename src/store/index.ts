import { createStore } from 'vuex';
import type { MutationTree, ActionTree, GetterTree } from 'vuex';

import { store as photos } from '@/store/modules/photos';
import { store as photo } from '@/store/modules/photo';
import type { PhotosStore } from '@/store/modules/photos';
import type { PhotoStore } from '@/store/modules/photo';
import type { ILoading } from '@/types/general.types';
import { MutationsTypes } from './mutations.types';
import { ActionsTypes } from './actions.types';

export interface RootState {
  loading: ILoading;
  photos?: PhotosStore;
  photo?: PhotoStore;
}

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

const getters: GetterTree<RootState, RootState> = {
  getLoadingOverlayState(state) {
    return state?.loading?.state ?? false;
  },

  getLoadingOverlayMessage(state) {
    return state?.loading?.message ?? '';
  },
};

export const store = createStore({
  state,
  getters,
  actions,
  mutations,
  modules: {
    photos,
    photo,
  },
});
