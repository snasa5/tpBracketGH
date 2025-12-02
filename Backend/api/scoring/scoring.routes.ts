import { Router } from 'express';
import { scoreEndpoint } from './scoring.controller';

const router = Router();
router.post('/score', scoreEndpoint);

export default router;
