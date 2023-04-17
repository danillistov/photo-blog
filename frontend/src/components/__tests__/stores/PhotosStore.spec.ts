import { createPinia, setActivePinia } from 'pinia';
import { usePhotosStore } from '@/stores/PhotosStore';
import {
  describe,
  beforeEach,
  beforeAll,
  afterAll,
  afterEach,
  it,
  expect,
} from 'vitest';
import photos from '@/components/__tests__/__fixtures__/photos';
import { startMockServer } from '@/components/mock/server';

const server = startMockServer();

describe('PhotosStore.ts', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('check', async () => {
    const store = usePhotosStore();

    await store.fetchPhotos();

    expect(store.getPhotos).toHaveLength(3);
    expect(store.getPhotos[0]).toEqual(photos[0]);
  });
});
