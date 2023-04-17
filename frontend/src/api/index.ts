/* eslint-disable no-debugger */
import type { IPhotoResponse } from '@/types/photos.types';
import { createUrlAddress } from '@/helpers';
import endpoints from './endpoints';

export const createNewPhotoPost = async (
  post: IPhotoResponse
): Promise<IPhotoResponse> => {
  const url = createUrlAddress(endpoints.newPhoto);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });

    const newPost = response.json();
    return newPost;
  } catch (error) {
    console.warn('[api/createNewPhotoPost]: request data error');
    throw error;
  }
};

export const fetchAllPhotos = async <
  T extends IPhotoResponse[]
>(): Promise<T> => {
  const url = createUrlAddress(endpoints.allPhotos);

  try {
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('[api/fetchAllPosts]: request data error');
    throw error;
  }
};

export const fetchPhotoById = async (id: string): Promise<IPhotoResponse> => {
  const url = createUrlAddress(endpoints.photoById(id));

  try {
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('[api/fetchPhotoById]: request data error');
    throw error;
  }
};

export const fetchPhotosWithParams = async (
  params = {}
): Promise<IPhotoResponse[]> => {
  const url = createUrlAddress(endpoints.photoWithParams, params);

  try {
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('[api/fetchPhotosWithParams]: request data error');
    throw error;
  }
};

export const updatePhotoPost = async <T extends IPhotoResponse>(
  updates: T
): Promise<IPhotoResponse> => {
  const url = createUrlAddress(endpoints.updatePhoto);

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('[api/updatePhotoPost]: request data error');
    throw error;
  }
};

export const deletePhotoPostById = async (
  id: string
): Promise<IPhotoResponse> => {
  const url = createUrlAddress(endpoints.deletePhotoById(id));

  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });

    const deletedPost = response.json();
    return deletedPost;
  } catch (error) {
    console.warn('[api/deletePhotoPostById]: request data error');
    throw error;
  }
};
