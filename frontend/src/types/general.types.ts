export interface ILoading {
  state: boolean;
  message: string;
}

export interface IUrlParams {
  [key: string]: string;
}

export interface IUseFetcherOptions {
  loadingMessage?: string;
}
