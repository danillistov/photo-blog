import { defineStore } from 'pinia';
import type { ILoading } from '@/types/general.types';

interface ILoadingOverlayState {
  loading: ILoading;
}

export const useLoadingOverlayStore = defineStore('LoadingOverlayStore', {
  state: (): ILoadingOverlayState => {
    return {
      loading: {
        state: false,
        message: '',
      },
    };
  },

  getters: {
    getLoadingOverlayState: (state): boolean => state?.loading?.state ?? false,
    getLoadingOverlayMessage: (state): string => state?.loading?.message ?? '',
  },

  actions: {
    changeLoadingOverlayState({ state = false, message = '' }: ILoading) {
      this.loading.state = state;
      this.loading.message = message;
    },
  },
});
