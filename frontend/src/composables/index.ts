import { useLoadingOverlayStore } from '@/stores/LoadingOverlayStore';
import type { IUseFetcherOptions } from '@/types/general.types';

const useFetcher = (fetcher: Function, options?: IUseFetcherOptions) => {
  const defaultOptions: IUseFetcherOptions = {
    loadingMessage: 'Loading...',
  };

  const fetchOptions: IUseFetcherOptions = {
    ...defaultOptions,
    ...options,
  };

  const { changeLoadingOverlayState } = useLoadingOverlayStore();

  const getData = async (...params: any[]) => {
    try {
      changeLoadingOverlayState({
        state: true,
        message: fetchOptions.loadingMessage ?? '',
      });

      const data = await fetcher(...params);
      return data;
    } finally {
      changeLoadingOverlayState({
        state: false,
        message: '',
      });
    }
  };

  return getData;
};

export { useFetcher };
