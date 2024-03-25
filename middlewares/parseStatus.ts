import { Handler } from 'hono/mod.ts';

export const parseStatus: Handler = async (c, next) => {
  const status = c.req.param('status');
  c.set('status', Number(status));
  await next();
};
