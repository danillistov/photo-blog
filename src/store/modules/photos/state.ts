import type { IPhotoResponse } from '@/types/photos.types';
export type State = {
  photos: IPhotoResponse[];
  search: string;
};

export const state: State = {
  photos: [],
  search: '',
};
