import type { IPhotoResponse } from '@/types/photos.types';
export type State = {
  currentPhoto: IPhotoResponse;
};

export const state: State = {
  currentPhoto: {} as IPhotoResponse,
};
