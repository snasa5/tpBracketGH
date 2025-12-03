
import { Router } from 'express';
import { newPool, getPools } from './pools.controller';

const router = Router();
router.post('/new', newPool);
router.get('/list', getPools);

export default router;
