import { useStore } from 'vuex';

const scrollDirectionHandler = (
  onUpCallback?: () => void,
  onDownCallback?: () => void
): void => {
  let scrollPos: number = 0;

  window.addEventListener('scroll', () => {
    const top: number = document?.body?.getBoundingClientRect()?.top;

    if (top === undefined) {
      return;
    }

    if (top > scrollPos) {
      onUpCallback && onUpCallback();
    } else if (scrollPos < -200) {
      onDownCallback && onDownCallback();
    }

    scrollPos = top;
  });
};

//TODO: move this interface to global types file
interface IUseFetcherOptions {
  loadingMessage?: string;
}

//TODO: Move this function to composable folder
const useFetcher = (fetcher: Function, options?: IUseFetcherOptions) => {
  const defaultOptions: IUseFetcherOptions = {
    loadingMessage: 'Loading...',
  };

  const fetchOptions: IUseFetcherOptions = {
    ...defaultOptions,
    ...options,
  };

  const store = useStore();

  const getData = async <T extends []>(...params: T) => {
    try {
      store.dispatch('changeLoadingOverlayState', {
        state: true,
        message: fetchOptions.loadingMessage,
      });

      const data = await fetcher(...params);
      return data;
    } catch (err) {
      console.warn(err);
    } finally {
      store.dispatch('changeLoadingOverlayState', {
        state: false,
        message: '',
      });
    }
  };

  return getData;
};

export { scrollDirectionHandler, useFetcher };
