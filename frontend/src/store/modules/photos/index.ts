import type {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module,
} from 'vuex';

import type { RootState } from '@/store';

import { state } from './state';
import type { State } from './state';
import { getters } from './getters';
import type { Getters } from './getters';
import { mutations } from './mutations';
import type { Mutations } from './mutations';
import { actions } from './actions';
import type { Actions } from './actions';

export type PhotosStore<S = State> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const store: Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
