import { Hono } from 'hono/mod.ts';
import router from '@/controllers/router.ts';

const app = new Hono();

app.use(async (c, next) => {
  console.log(`${c.req.method.toUpperCase()} ${c.req.path}`);
  await next();
});
app.route('/', router);

Deno.serve({ port: 8080 }, app.fetch);
