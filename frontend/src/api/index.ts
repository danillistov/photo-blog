import type { IPhotoResponse } from '@/types/photos.types';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const createAddress = <T extends {}>(
  path: string = '/',
  params?: T
): string => {
  const url: URL = new URL(path, BASE_URL);

  if (params) {
    const queries: URLSearchParams = new URLSearchParams(params);
    url.search = queries.toString();
  }

  return url.toString();
};

export const fetchAllPhotos = async <
  T extends IPhotoResponse[]
>(): Promise<T> => {
  const url = createAddress('photos');

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.warn('[api/fetchAllPosts]: request data error', error);
    throw error;
  }
};

export const fetchPhotosWithParams = async (
  params = {}
): Promise<IPhotoResponse[]> => {
  const url = createAddress('photos', params);

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.warn('[api/fetchPhotoById]: request data error', error);
    throw error;
  }
};

export const fetchPhotoById = async (id: number): Promise<IPhotoResponse> => {
  const url = new URL(`photos/${id}`, 'http://localhost:3000');

  try {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();

    return data;
  } catch (error) {
    console.warn('[api/fetchPhotoById]: request data error', error);
    throw error;
  }
};
