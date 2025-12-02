import { Request, Response } from 'express';
import { createUser, verifyPin } from './auth.service';

export async function register(req: Request, res: Response) {
  const { phone, pin } = req.body;
  if (!phone || !pin) return res.status(400).json({ error: 'phone and pin required' });
  const { id } = await createUser(phone, pin);
  // TODO: send SMS verification and link upon confirmation
  res.json({ tpId: id });
}

export async function login(req: Request, res: Response) {
  const { id, pin } = req.body;
  const ok = await verifyPin(id, pin);
  if (!ok) return res.status(401).json({ error: 'invalid credentials' });
  res.json({ message: 'authenticated', tpId: id });
}
