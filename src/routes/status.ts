import { Router } from 'oak';

import { parseStatus } from 'm';

import * as handlers from 'h/status.ts';

const router = new Router();

router.get('/:status', parseStatus, async (ctx, next) => {
  [ctx.response.status, ctx.response.body] = await handlers.getStatus(ctx.state.status);
  await next();
});

export default router;
