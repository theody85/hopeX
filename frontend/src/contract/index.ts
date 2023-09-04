import { ethers } from "ethers";
import ABI from "./abi.json";
// import { Charity } from "@/types/charity";

const CONTRACT_ADDRESS = "0x6c4b0CD0C193cFa0d060B988cdBFDb299A83501B";

export const charityContract = new ethers.Contract(CONTRACT_ADDRESS, ABI);
