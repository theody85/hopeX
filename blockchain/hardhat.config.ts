import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import "hardhat-gas-reporter";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD", // currency to show
    outputFile: "gas-report.txt", // optional
    noColors: true, //optional
    coinmarketcap: process.env.ALCHEMY_API_KEY, //to fetch gas data
    token: "MATIC", // for polygon blockchain(optional).
  },
};

export default config;
