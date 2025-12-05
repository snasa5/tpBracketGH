
// src/lib/blockchain.ts
import { ethers } from 'ethers'

export async function connectWallet() {
  if (!(window as any).ethereum) throw new Error('No wallet found')
  const provider = new ethers.BrowserProvider((window as any).ethereum)
  await provider.send('eth_requestAccounts', [])
  return provider
}

export async function getBalance(address: string) {
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
  return await provider.getBalance(address)
}
