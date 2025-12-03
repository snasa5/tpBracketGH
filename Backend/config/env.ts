
type Env = {
  PORT: number;
  COSMOS_CONNECTION_STRING: string;
  KEYVAULT_URL: string;
  APPINSIGHTS_KEY?: string;
  GOALSERVE_KEY: string;
  GOALSERVE_BASE?: string;
  POLYGON_RPC: string;
  PRIZE_CONTRACT: string;
  PAYOUT_SIGNER_KEY: string;
  TWILIO_SID?: string;
  TWILIO_TOKEN?: string;
  TWILIO_FROM?: string;
};

export const env: Env = {
  PORT: Number(process.env.PORT || 8080),
  COSMOS_CONNECTION_STRING: required('COSMOS_CONNECTION_STRING'),
  KEYVAULT_URL: required('KEYVAULT_URL'),
  APPINSIGHTS_KEY: process.env.APPINSIGHTS_KEY,
  GOALSERVE_KEY: required('GOALSERVE_KEY'),
  GOALSERVE_BASE: process.env.GOALSERVE_BASE,
  POLYGON_RPC: required('POLYGON_RPC'),
  PRIZE_CONTRACT: required('PRIZE_CONTRACT'),
  PAYOUT_SIGNER_KEY: required('PAYOUT_SIGNER_KEY'),
  TWILIO_SID: process.env.TWILIO_SID,
  TWILIO_TOKEN: process.env.TWILIO_TOKEN,
  TWILIO_FROM: process.env.TWILIO_FROM,
};

function required(name: string) {
  const val = process.env[name];
  if (!val) throw new Error(`Missing env var: ${name}`);
  return val;
}
