import { ethers } from 'ethers';

// On Azure, use Key Vault to store RPC and private keys
export async function payWinner(prizeWei: string, winnerAddress: string, contractAddress: string, rpcUrl: string, signerKey: string) {
  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(signerKey, provider);
  const abi = [
    "function payPrize(address winner,uint256 amountWei) external"
  ];
  const contract = new ethers.Contract(contractAddress, abi, wallet);
  const tx = await contract.payPrize(winnerAddress, prizeWei);
  return tx.hash;
}
