export interface Request<T> {
  body?: T;
  headers?: unknown;
  params?: unknown;
}

export interface Response {
  status?: number;
  data?: unknown;
}

export interface Controller<T> {
  handle(request?: Request<T>): Response;
}