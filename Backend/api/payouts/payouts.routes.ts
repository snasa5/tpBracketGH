import { Router } from 'express';
import { payout } from './payouts.controller';

const router = Router();
router.post('/payout', payout);

export default router;
