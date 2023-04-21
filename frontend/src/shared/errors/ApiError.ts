export class ApiError extends Error {
  status: number;
  constructor(scope: string, message: string, status: number) {
    super(`[api/${scope}]: ${message}`);
    this.status = status;
  }
}
