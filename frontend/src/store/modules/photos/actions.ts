import type { ActionTree, ActionContext } from 'vuex';
import type { State } from './state';
import type { Mutations } from './mutations';
import type { RootState } from '@/store';
import type { IPhotoResponse } from '@/types/photos.types';
import { ActionsTypes } from './actions.types';
import { MutationTypes } from './mutations.types';
import { useFetcher } from '@/helpers';

import { fetchAllPhotos } from '@/api';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
  [ActionsTypes.FETCH_PHOTOS]({
    commit,
  }: AugmentedActionContext): Promise<void>;
  [ActionsTypes.SET_SEARCH_STRING](
    { commit }: AugmentedActionContext,
    search: string
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionsTypes.FETCH_PHOTOS]({ commit }) {
    const getData = useFetcher(fetchAllPhotos, {
      loadingMessage: 'Loading photos...',
    });

    try {
      const photos: IPhotoResponse[] = await getData();
      commit(MutationTypes.SET_PHOTOS, photos);
      commit(MutationTypes.SET_SEARCH_INPUT_STATE, true);
    } catch (err) {
      console.warn(err);
    }
  },

  [ActionsTypes.SET_SEARCH_STRING]({ commit }, search: string) {
    commit(MutationTypes.SET_SEARCH, search);
  },
};
