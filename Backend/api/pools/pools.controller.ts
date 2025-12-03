
import { Request, Response } from 'express';
import { createPool, listPools } from './pools.service';

export async function newPool(req: Request, res: Response) {
  const { ownerId, name, type } = req.body;
  if (!ownerId || !name || !type) return res.status(400).json({ error: 'ownerId, name, type required' });
  const pool = await createPool(ownerId, name, type);
  res.json(pool);
}

export async function getPools(req: Request, res: Response) {
  const { ownerId } = req.query;
  if (!ownerId) return res.status(400).json({ error: 'ownerId required' });
  const pools = await listPools(String(ownerId));
  res.json(pools);
}
