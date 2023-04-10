import { defineStore } from 'pinia';
import type { IPhotoResponse } from '@/types/photos.types';
import { useFetcher } from '@/helpers';
import { fetchAllPhotos } from '@/api';

interface IPhotosStoreState {
  photos: IPhotoResponse[];
  search: string;
  searchIsEnabled: boolean;
}

export const usePhotosStore = defineStore('PhotosStore', {
  state: (): IPhotosStoreState => {
    return {
      photos: [],
      search: '',
      searchIsEnabled: false,
    };
  },

  getters: {
    getPhotos(state): IPhotoResponse[] {
      return state?.photos ?? [];
    },
    getFilteredPhotos(state): IPhotoResponse[] {
      const filters = {
        search: (photo: IPhotoResponse) =>
          photo.title.toLowerCase().includes(state.search.toLowerCase()),
      };

      const filteredPhotos = state?.photos.filter(filters.search);

      return filteredPhotos ?? [];
    },
    getSearchInputStatus(state): boolean {
      return state?.searchIsEnabled ?? '';
    },
  },

  actions: {
    async fetchPhotos(): Promise<void> {
      const getData = useFetcher(fetchAllPhotos, {
        loadingMessage: 'Loading photos...',
      });

      try {
        const photos: IPhotoResponse[] = await getData();
        this.photos = photos;
        this.searchIsEnabled = true;
      } catch (err) {
        this.searchIsEnabled = false;
      }
    },

    setSearchString(search: string = '') {
      this.search = search;
    },
  },
});
