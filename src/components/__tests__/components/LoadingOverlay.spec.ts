import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import LoadingOverlay from '@/components/LoadingOverlay.vue';

const createVueComponentInstance = <T extends {}>(options?: T) => {
  return mount(LoadingOverlay, options);
};

describe('LoadingOverlay component testing', () => {
  it('The component should exist', () => {
    expect(LoadingOverlay).toBeTruthy();
  });

  it('should be hidden if the passed state is false', () => {
    const wrapper = createVueComponentInstance();
    expect(wrapper.get('#loading-overlay').isVisible()).toBeFalsy();

    wrapper.unmount();
  });

  it('should be visible if the passed state is true', () => {
    const options = {
      props: {
        state: true,
      },
    };

    const wrapper = createVueComponentInstance(options);
    expect(wrapper.get('#loading-overlay').isVisible()).toBeTruthy();

    wrapper.unmount();
  });

  it('should show a default message if the passed message is empty', () => {
    const options = {
      props: {
        state: true,
      },
    };

    const wrapper = createVueComponentInstance(options);
    expect(wrapper.find('span').text()).toBe('Loading...');

    wrapper.unmount();
  });

  it('should show the passed message', () => {
    const message = 'Loading photos...';

    const options = {
      props: {
        state: true,
        message,
      },
    };

    const wrapper = createVueComponentInstance(options);
    expect(wrapper.find('span').text()).toBe(message);

    wrapper.unmount();
  });
});
