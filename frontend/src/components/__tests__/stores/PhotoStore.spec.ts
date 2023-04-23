import { createPinia, setActivePinia } from 'pinia';
import {
  beforeEach,
  beforeAll,
  afterAll,
  afterEach,
  describe,
  it,
  expect,
} from 'vitest';
import { startMockServer } from '../mock/server';
import photos from '../__fixtures__/photos';
import { usePhotoStore } from '@/stores/PhotoStore';

const server = startMockServer();

describe('PhotoStore.ts', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should fetch current photo data and attend it to current photo state property', async () => {
    const store = usePhotoStore();
    const fakePhoto = photos[0];
    const { _id: id } = fakePhoto;

    await store.fetchPhotoById(id);

    expect(store.getCurrentPhoto._id).toBe(id);
    expect(store.getCurrentPhoto).toEqual(fakePhoto);
  });
});
