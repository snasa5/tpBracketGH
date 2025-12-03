
import { run } from "hardhat";

async function main() {
  const address = process.env.PRIZE_CONTRACT!;
  const admin = process.env.PAYOUT_SIGNER_KEY!;
  if (!address) throw new Error('PRIZE_CONTRACT not set');
  await run("verify:verify", {
    address,
    constructorArguments: [admin],
  });
  console.log('Verification requested for', address);
}

main().catch((e) => { console.error(e); process.exit(1); });
