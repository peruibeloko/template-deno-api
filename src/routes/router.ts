import { Router } from 'oak';
import status from './status.ts';

const router = new Router();
router.use('/status', status.routes());
router.use('/status', status.allowedMethods());

export default router;
