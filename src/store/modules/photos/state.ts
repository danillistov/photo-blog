import type { IPhotoResponse } from '@/types/photos.types';
export type State = {
  photos: IPhotoResponse[];
  search: string;
  searchIsEnabled: boolean;
};

export const state: State = {
  photos: [],
  search: '',
  searchIsEnabled: false,
};
