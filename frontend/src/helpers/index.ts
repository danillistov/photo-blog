import { useLoadingOverlayStore } from '@/stores/LoadingOverlayStore';
import type { IUrlParams } from '@/types/general.types';

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

  const { changeLoadingOverlayState } = useLoadingOverlayStore();

  const getData = async <T extends []>(...params: T) => {
    try {
      changeLoadingOverlayState({
        state: true,
        message: fetchOptions.loadingMessage ?? '',
      });

      const data = await fetcher(...params);
      return data;
    } catch (err) {
      console.warn(err);
    } finally {
      changeLoadingOverlayState({
        state: false,
        message: '',
      });
    }
  };

  return getData;
};

const createUrlAddress = (
  baseUrl: string,
  path: string = '/',
  params?: IUrlParams
): string => {
  const url: URL = new URL(`/api/${path}`, baseUrl);

  if (params) {
    const queries: URLSearchParams = new URLSearchParams(params);
    url.search = queries.toString();
  }

  return url.toString();
};

export { scrollDirectionHandler, useFetcher, createUrlAddress };
