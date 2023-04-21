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
import { startMockServer } from '@/components/__tests__/mock/server';
import { rest } from 'msw';
import endpoints from '@/api/endpoints';

const server = startMockServer();

const defaultPhotosStoreState = {
  photos: [],
  search: '',
  searchIsEnabled: false,
};

describe('PhotosStore.ts', () => {
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should have correct default state properties', () => {
    const store = usePhotosStore();

    expect(store.$state).toEqual(defaultPhotosStoreState);
  });

  it('should successfully fetch photos', async () => {
    const store = usePhotosStore();

    await store.fetchPhotos();

    expect(store.getPhotos).toHaveLength(3);
    expect(store.getPhotos[0]).toEqual(photos[0]);
  });

  it('should searchIsEnabled property state to be truthy after data fetching', async () => {
    const store = usePhotosStore();

    expect(store.searchIsEnabled).toBeFalsy();

    await store.fetchPhotos();
    expect(store.searchIsEnabled).toBeTruthy();
  });

  it('should searchIsEnabled property state to be falsy if data fetching error', async () => {
    const store = usePhotosStore();

    expect(store.searchIsEnabled).toBeFalsy();

    server.use(
      rest.get(endpoints.allPhotos, async (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            errorMessage: 'User not found',
          })
        );
      })
    );

    await store.fetchPhotos();
    expect(store.searchIsEnabled).toBeFalsy();

    server.resetHandlers();
    await store.fetchPhotos();
    expect(store.searchIsEnabled).toBeTruthy();
  });

  it('should saving search prompt to state search property', () => {
    const store = usePhotosStore();
    const searchPrompt = 'Tokyo Tower';

    expect(store.search).toBe('');

    store.setSearchString(searchPrompt);
    expect(store.search).toBe(searchPrompt);
  });
});
