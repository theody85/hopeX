import { ethers } from "hardhat";
import { expect } from "chai";

describe("Withdraw", function () {
  it('should revert with error message "Failed to send Matic" when withdrawal fails', async function () {
    const [owner, beneficiary] = await ethers.getSigners();

    const Withdraw = await ethers.getContractFactory("Withdraw");
    await Withdraw.deploy();

    const testHelperFactory = await ethers.getContractFactory("TestHelper");
    const testHelper = await testHelperFactory.deploy();

    await expect(
      testHelper.connect(owner).withdraw(beneficiary.address, 10),
    ).to.be.revertedWith("Failed to send Matic");
  });
});
