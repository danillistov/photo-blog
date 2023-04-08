/* eslint-disable no-debugger */
import type { IPhotoResponse } from '@/types/photos.types';
import { createUrlAddress } from '@/helpers';

const BASE_URL = import.meta.env.VITE_API_URL;

export const createNewPhotoPost = async (
  post: IPhotoResponse
): Promise<IPhotoResponse> => {
  const url = createUrlAddress(BASE_URL, 'posts');

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
  console.log(BASE_URL);
  const url = createUrlAddress(BASE_URL, 'posts');

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
  const url = createUrlAddress(BASE_URL, `photos/${id}`);

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
  const url = createUrlAddress(BASE_URL, 'photos', params);

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
  const url = createUrlAddress(BASE_URL, 'posts');

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
  const url = createUrlAddress(BASE_URL, `posts/${id}`);

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
