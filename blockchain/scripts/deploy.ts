import { ethers } from "hardhat";

async function main() {
  const charity = await ethers.deployContract("Charity");

  await charity.waitForDeployment();

  console.log(`Charity contract deployed to ${charity.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
