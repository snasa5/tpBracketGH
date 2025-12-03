
import { CosmosClient } from '@azure/cosmos';
import { env } from './env';

export const cosmosClient = new CosmosClient(env.COSMOS_CONNECTION_STRING);
export const db = cosmosClient.database('tp');
export const users = db.container('users');
export const pools = db.container('pools');
