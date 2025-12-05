
// src/lib/payouts.ts
import { ethers } from 'ethers'

export async function sendPayout(to: string, amountEth: string) {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)
  const tx = await wallet.sendTransaction({
    to,
    value: ethers.parseEther(amountEth),
  })
  return tx.hash
}
