
import { Request, Response } from 'express';
import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING!);
const db = client.database('tp');
const users = db.container('users');

export async function completeProfile(req: Request, res: Response) {
  const { tpId, name, city, country } = req.body;
  if (!tpId) return res.status(400).json({ error: 'tpId required' });
  const { resources } = await users.items.query({
    query: 'SELECT * FROM c WHERE c.id = @id',
    parameters: [{ name: '@id', value: tpId }]
  }).fetchAll();
  const user = resources[0];
  if (!user) return res.status(404).json({ error: 'user not found' });
  user.name = name;
  user.city = city;
  user.country = country;
  await users.items.upsert(user);
  res.json({ status: 'profile updated', user });
}
