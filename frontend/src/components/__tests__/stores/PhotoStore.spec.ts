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

const server = startMockServer();

describe('PhotoStore.ts', () => {
  it('test', () => {
    expect(1).toEqual(1);
  });
});
