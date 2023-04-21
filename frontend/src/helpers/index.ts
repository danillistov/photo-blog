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

const createUrlAddress = (path: string = '/', params?: IUrlParams): string => {
  const BASE_URL = import.meta.env.VITE_API_URL || 'http:localhost:3000';
  const url: URL = new URL(path, BASE_URL);

  if (params) {
    const queries: URLSearchParams = new URLSearchParams(params);
    url.search = queries.toString();
  }

  return url.toString();
};

export { scrollDirectionHandler, createUrlAddress };
