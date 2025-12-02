
import { Request, Response } from 'express';
import crypto from 'crypto';
import { CosmosClient } from '@azure/cosmos';
import { sendVerificationSms } from './sms.service';

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING!);
const db = client.database('tp');
const users = db.container('users');

export async function requestVerification(req: Request, res: Response) {
  const { tpId, phone } = req.body;
  if (!tpId || !phone) return res.status(400).json({ error: 'tpId and phone required' });
  const code = crypto.randomInt(100000, 999999).toString();
  await sendVerificationSms(phone, code);
  await users.items.upsert({ id: tpId, phone, verificationCode: code, verified: false, updatedAt: new Date().toISOString() });
  res.json({ status: 'sent' });
}

export async function confirmVerification(req: Request, res: Response) {
  const { tpId, code } = req.body;
  const { resources } = await users.items.query({
    query: 'SELECT * FROM c WHERE c.id = @id',
    parameters: [{ name: '@id', value: tpId }]
  }).fetchAll();
  const u = resources[0];
  if (!u || !u.verificationCode) return res.status(404).json({ error: 'user or verification not found' });
  if (u.verificationCode !== code) return res.status(400).json({ error: 'invalid code' });
  u.verified = true;
  delete u.verificationCode;
  await users.items.upsert(u);
  res.json({ status: 'verified' });
}
