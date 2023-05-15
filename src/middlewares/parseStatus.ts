import { getQuery } from 'oak/helpers.ts';
import { Middleware } from 'oak/middleware.ts';

export const parseStatus: Middleware = async (ctx, next) => {
  const params = getQuery(ctx, { mergeParams: true });
  ctx.state.status = params.status;
  await next();
};
