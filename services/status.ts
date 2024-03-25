import * as Status from '@/clients/StatusClient.ts';
import { Handler } from 'hono/mod.ts';

export const getStatus: Handler = async c => {
  const status = c.get('status');
  const text = await Status.getStatus(status);
  return c.text(text);
};
