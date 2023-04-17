import { setupServer } from 'msw/node';
import { rest } from 'msw';
import fetch, { Request, Response } from 'node-fetch';
import endpoints from '@/api/endpoints';
import photos from '../__tests__/__fixtures__/photos';

const restServerHandlers = [
  rest.get(endpoints.allPhotos, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(photos));
  }),
];

(global as any).fetch = fetch;
(global as any).Request = Request;
(global as any).Response = Response;

export const startMockServer = () => setupServer(...restServerHandlers);
