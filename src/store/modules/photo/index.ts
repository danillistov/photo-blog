import type {
  Store as VuexStore,
  // CommitOptions,
  // DispatchOptions,
  Module,
} from 'vuex';

import type { RootState } from '@/store';

import { state } from './state';
import type { State } from './state';

export type PhotoStore<S = State> = Omit<
  VuexStore<S>,
  'getters' | 'commit' | 'dispatch'
>;

export const store: Module<State, RootState> = {
  state,
  namespaced: true,
};
