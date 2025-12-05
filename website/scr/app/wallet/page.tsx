
'use client'
import { connectWallet } from '@/lib/blockchain'
import { useState } from 'react'

export default function WalletPage() {
  const [address, setAddress] = useState<string | null>(null)

  async function handleConnect() {
    const provider = await connectWallet()
    const signer = await provider.getSigner()
    setAddress(await signer.getAddress())
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-display mb-4">Connect Wallet</h1>
      <button onClick={handleConnect} className="px-4 py-2 bg-primary text-white rounded-md">
        Connect Trust Wallet
      </button>
      {address && <p className="mt-4">Connected: {address}</p>}
    </div>
  )
}
