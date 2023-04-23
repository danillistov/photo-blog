import { setupServer } from 'msw/node';
import { rest } from 'msw';
import fetch, { Request, Response } from 'node-fetch';
import endpoints from '@/api/endpoints';
import photos from '../__fixtures__/photos';

const restServerHandlers = [
  rest.get(endpoints.allPhotos, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(photos));
  }),
  rest.get(endpoints.photoById(':id'), (req, res, ctx) => {
    const { id } = req.params;
    const photo = photos.find((photo) => photo._id === id);

    return res(ctx.status(200), ctx.json(photo));
  }),
];

if (!global?.fetch) {
  (global as any).fetch = fetch;
}

if (!global?.Request) {
  (global as any).Request = Request;
}

if (!global?.Response) {
  (global as any).Response = Response;
}

export const startMockServer = () => setupServer(...restServerHandlers);
