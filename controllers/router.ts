import { Hono } from 'hono/mod.ts';
import status from "@/controllers/status.ts";

const router = new Hono();

router.route('/status', status);

export default router;
