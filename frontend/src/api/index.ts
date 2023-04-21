import type { IPhotoResponse } from '@/types/photos.types';
import { createUrlAddress } from '@/helpers';
import endpoints from './endpoints';
import { ApiError } from '@/shared/errors/ApiError';

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

    if (!response.ok) {
      throw new ApiError(
        'createNewPhotoPost',
        'create new post error',
        response.status
      );
    }

    return newPost;
  } catch (error) {
    throw new ApiError('createNewPhotoPost', 'An unknown error occurred.', 500);
  }
};

export const fetchAllPhotos = async (): Promise<IPhotoResponse[]> => {
  const url = createUrlAddress(endpoints.allPhotos);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError('fetchAllPhotos', data.message, response.status);
    }

    return data;
  } catch (error) {
    throw new ApiError('fetchAllPhotos', 'An unknown error occurred.', 500);
  }
};

export const fetchPhotoById = async (id: string): Promise<IPhotoResponse> => {
  const url = createUrlAddress(endpoints.photoById(id));

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError('fetchPhotoById', data.message, response.status);
    }

    return data;
  } catch (error) {
    throw new ApiError('fetchPhotoById', 'An unknown error occurred.', 500);
  }
};

export const fetchPhotosWithParams = async (
  params = {}
): Promise<IPhotoResponse[]> => {
  const url = createUrlAddress(endpoints.photoWithParams, params);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        'fetchPhotosWithParams',
        data.message,
        response.status
      );
    }

    return data;
  } catch (error) {
    throw new ApiError(
      'fetchPhotosWithParams',
      'An unknown error occurred.',
      500
    );
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

    if (!response.ok) {
      throw new ApiError('updatePhotoPost', data.message, response.status);
    }

    return data;
  } catch (error) {
    throw new ApiError('updatePhotoPost', 'An unknown error occurred.', 500);
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

    if (!response.ok) {
      throw new ApiError(
        'deletePhotoPostById',
        'delete photo post failed',
        response.status
      );
    }
    return deletedPost;
  } catch (error) {
    throw new ApiError(
      'deletePhotoPostById',
      'An unknown error occurred.',
      500
    );
  }
};
