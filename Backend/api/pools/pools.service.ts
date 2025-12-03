
import { CosmosClient } from '@azure/cosmos';

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING!);
const db = client.database('tp');
const pools = db.container('pools');

export async function createPool(ownerId: string, name: string, type: 'individual' | 'institution') {
  const pool = { id: `${ownerId}-${Date.now()}`, ownerId, name, type, createdAt: new Date().toISOString() };
  await pools.items.create(pool);
  return pool;
}

export async function listPools(ownerId: string) {
  const { resources } = await pools.items
    .query({ query: 'SELECT * FROM c WHERE c.ownerId = @ownerId', parameters: [{ name: '@ownerId', value: ownerId }] })
    .fetchAll();
  return resources;
}
