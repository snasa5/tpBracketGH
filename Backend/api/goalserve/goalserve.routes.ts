import { Router } from 'express';
import { liveScores, matchStats } from './goalserve.controller';

const router = Router();
router.get('/live', liveScores);
router.get('/stats/:matchId', matchStats);

export default router;
