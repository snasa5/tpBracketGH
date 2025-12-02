import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING!);
const db = client.database('tp');
const users = db.container('users');

export async function createUser(phone: string, pinPlain: string) {
  const id = generateSixDigitId();
  const pinHash = await bcrypt.hash(pinPlain, 10);
  const user = { id, phone, pinHash, createdAt: new Date().toISOString() };
  await users.items.create(user);
  return { id };
}

export async function verifyPin(id: string, pinPlain: string) {
  const { resources } = await users.items
    .query({ query: 'SELECT * FROM c WHERE c.id = @id', parameters: [{ name: '@id', value: id }] })
    .fetchAll();
  if (!resources[0]) return false;
  return bcrypt.compare(pinPlain, resources[0].pinHash);
}

function generateSixDigitId(): string {
  const n = crypto.randomInt(0, 1000000);
  return n.toString().padStart(6, '0');
}
