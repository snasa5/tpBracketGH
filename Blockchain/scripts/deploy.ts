
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const Prize = await ethers.getContractFactory("PrizePayout");
  const contract = await Prize.deploy(deployer.address);
  await contract.waitForDeployment();
  console.log("PrizePayout deployed:", await contract.getAddress());
}
main().catch((e) => { console.error(e); process.exit(1); });
