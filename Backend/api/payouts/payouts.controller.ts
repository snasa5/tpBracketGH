import { Request, Response } from 'express';
import { payWinner } from './payouts.service';

export async function payout(req: Request, res: Response) {
  const { prizeWei, winnerAddress } = req.body;
  // Fetch contractAddress, rpcUrl, signerKey from KeyVault or env
  const contractAddress = process.env.PRIZE_CONTRACT!;
  const rpcUrl = process.env.POLYGON_RPC!;
  const signerKey = process.env.PAYOUT_SIGNER_KEY!;
  try {
    const txHash = await payWinner(prizeWei, winnerAddress, contractAddress, rpcUrl, signerKey);
    res.json({ txHash });
  } catch (e) {
    res.status(500).json({ error: 'payout failed' });
  }
}
