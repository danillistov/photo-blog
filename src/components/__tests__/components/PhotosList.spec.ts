import { shallowMount } from '@vue/test-utils';
import { render, cleanup } from '@testing-library/vue';
import { expect, describe, it } from 'vitest';
import PhotosList from '@/components/PhotosList.vue';
import fakePhotos from '../__fixtures__/photos';

describe('PhotosList component', () => {
  it('The component should exist', () => {
    expect(PhotosList).toBeTruthy();
  });

  it('should render a list with the correct number of photos', async () => {
    const wrapper = shallowMount(PhotosList, {
      props: {
        photos: fakePhotos,
      },
    });

    const items = await wrapper.findAll('photos-item-stub');

    expect(items).toHaveLength(3);

    wrapper.unmount();
  });

  it('should display the stub message, if photos is empty', async () => {
    const message = 'The photo list is currently empty.';

    const { getByText } = render(PhotosList, {
      props: {
        photos: [],
        emptyListMessage: message,
      },
    });

    expect(getByText(message).textContent?.trim()).toBe(message);

    cleanup();
  });
});
