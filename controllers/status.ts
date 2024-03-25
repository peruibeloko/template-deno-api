import { Hono } from 'hono/mod.ts';

import { parseStatus } from '@/middlewares/parseStatus.ts';

import * as handlers from '@/services/status.ts';

const status = new Hono<{
  Variables: {
    status: number;
  };
}>();

status.get('/:status{[1-5][0-9]{2}}', parseStatus, handlers.getStatus);

export default status;
