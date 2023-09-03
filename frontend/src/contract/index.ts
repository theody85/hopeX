import { ethers } from "ethers";
import ABI from "./abi.json";

const CONTRACT_ADDRESS = "0x008E18Ba39f99E2A4ce794011E17ffb727bf9f86";

export const charity = new ethers.Contract(CONTRACT_ADDRESS, ABI);
