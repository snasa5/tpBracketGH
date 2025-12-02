import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    polygon: {
      url: process.env.POLYGON_RPC!,
      accounts: [process.env.PAYOUT_SIGNER_KEY!]
    }
  }
};
export default config;
