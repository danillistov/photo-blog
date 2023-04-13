import { createPinia, setActivePinia } from 'pinia';
import { beforeEach, describe, it, expect } from 'vitest';
import { useLoadingOverlayStore } from '@/stores/LoadingOverlayStore';
import type { ILoading } from '@/types/general.types';

let newLoadingState: ILoading;

describe('LoadingOverlayStore.ts', () => {
  beforeEach(() => {
    setActivePinia(createPinia());

    newLoadingState = {
      state: true,
      message: 'Loading...',
    };
  });

  it('should have "message" and "state" properties with default values', () => {
    const store = useLoadingOverlayStore();

    expect(store.loading.message).toBe('');
    expect(store.loading.state).toBeFalsy();
  });

  it('should change loading state properties on action method with params', () => {
    const store = useLoadingOverlayStore();

    store.changeLoadingOverlayState(newLoadingState);

    expect(store.loading.message).toBe(newLoadingState.message);
    expect(store.loading.state).toBe(newLoadingState.state);

    newLoadingState.state = false;
    newLoadingState.message = '';

    store.changeLoadingOverlayState(newLoadingState);

    expect(store.loading.message).toBe(newLoadingState.message);
    expect(store.loading.state).toBe(newLoadingState.state);
  });

  it('getters should return current message and state values', () => {
    const store = useLoadingOverlayStore();

    expect(store.getLoadingOverlayState).toBeFalsy();
    expect(store.getLoadingOverlayMessage).toBe('');

    store.changeLoadingOverlayState(newLoadingState);

    expect(store.getLoadingOverlayState).toBe(newLoadingState.state);
    expect(store.getLoadingOverlayMessage).toBe(newLoadingState.message);
  });
});
