import { SecretClient } from '@azure/keyvault-secrets';
import { DefaultAzureCredential } from '@azure/identity';

const credential = new DefaultAzureCredential();
const kvUrl = process.env.KEYVAULT_URL!;
export const secretClient = new SecretClient(kvUrl, credential);

export async function getSecret(name: string): Promise<string> {
  const secret = await secretClient.getSecret(name);
  return secret.value!;
}
