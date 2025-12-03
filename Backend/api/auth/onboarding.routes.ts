
import { Router } from 'express';
import { completeProfile } from './onboarding.controller';

const router = Router();
router.post('/complete-profile', completeProfile);

export default router;
