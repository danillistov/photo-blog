import { defineStore } from 'pinia';
import type { IPhotoResponse } from '@/types/photos.types';
import { fetchPhotoById } from '@/api';
import { useFetcher } from '@/helpers';

interface IPhotoStoreState {
  currentPhoto: IPhotoResponse;
}

export const usePhotoStore = defineStore('PhotoStore', {
  state: (): IPhotoStoreState => {
    return {
      currentPhoto: {} as IPhotoResponse,
    };
  },

  getters: {
    getCurrentPhoto(state): IPhotoResponse {
      return state?.currentPhoto ?? {};
    },
  },

  actions: {
    async fetchPhotoById(id: string | string[]): Promise<void> {
      const getData = useFetcher(fetchPhotoById, {
        loadingMessage: 'Loading photo...',
      });

      try {
        const photo: IPhotoResponse = await getData(id);
        this.currentPhoto = photo;
      } catch (err) {
        console.warn(err);
      }
    },
  },
});
