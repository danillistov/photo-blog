import type { ActionTree, ActionContext } from 'vuex';
import type { State } from './state';
import type { Mutations } from './mutations';
import type { RootState } from '@/store';
import type { IPhotoResponse } from '@/types/photos.types';
import { ActionsTypes } from './actions.types';
import { MutationTypes } from './mutations.types';

import { fetchPhotoById } from '@/api';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>;

export interface Actions {
  [ActionsTypes.FETCH_PHOTO](
    { commit }: AugmentedActionContext,
    id: number | string
  ): Promise<void>;
}

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionsTypes.FETCH_PHOTO]({ commit }, id: number) {
    if (id === undefined) {
      return;
    }

    const photo: IPhotoResponse = await fetchPhotoById(id);
    commit(MutationTypes.SET_CURRENT_PHOTO, photo);
  },
};
