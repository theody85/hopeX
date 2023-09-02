import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Charity", function () {
  async function deployCharityFixture() {
    const [admin, beneficiary, donor1, donor2, donor3] =
      await ethers.getSigners();

    const Charity = await ethers.getContractFactory("Charity");
    const charity = await Charity.deploy();

    //Add beneficiary
    await charity
      .connect(admin)
      .addBeneficiary(beneficiary.address, "Beneficiary_1", "Needs support");

    return { charity, admin, beneficiary, donor1, donor2, donor3 };
  }

  describe("Donation", function () {
    describe("Amount", function () {
      it("should be able to donate 0 MATIC", async () => {
        const { charity, donor1 } = await loadFixture(deployCharityFixture);

        //Value defaults to 0
        const donate = await charity.connect(donor1)["donate()"];
        await donate();

        let totalDonationAmount = await charity.getTotalAmount();
        expect(totalDonationAmount).to.equal(0);

        //Specify value as 0
        await donate({ value: 0 });

        totalDonationAmount = await charity.getTotalAmount();
        expect(totalDonationAmount).to.equal(0);
      });

      it("should be able to donate MATIC", async () => {
        const { charity, donor2 } = await loadFixture(deployCharityFixture);

        const donate = await charity.connect(donor2)["donate()"];
        await donate({ value: 10 });

        let totalDonationAmount = await charity.getTotalAmount();
        expect(totalDonationAmount).to.equal(10);

        //Test 2
        await donate({ value: 100 });

        totalDonationAmount = await charity.getTotalAmount();
        expect(totalDonationAmount).to.equal(110);

        //Test 3
        await donate({ value: 1000 });

        totalDonationAmount = await charity.getTotalAmount();
        expect(totalDonationAmount).to.equal(1110);
      });
    });

    describe("Purpose", function () {
      it("should be able to donate without specifying purpose", async () => {
        const { charity, donor1 } = await loadFixture(deployCharityFixture);

        const donate = await charity.connect(donor1)["donate()"];
        await donate();

        const donationsNumber = await charity.totalDonationNumber();

        const donations = await charity.getDonationsRecord();
        const donorAddress = donations[Number(donationsNumber) - 1].donor;
        const donationPurpose = donations[Number(donationsNumber) - 1].message;

        expect(donationsNumber).to.equal(1);
        expect(donorAddress).to.equal(donor1.address);
        expect(donationPurpose).to.equal("");
      });

      it("should be able to donate with a specified purpose", async () => {
        const { charity, donor1 } = await loadFixture(deployCharityFixture);

        const purpose = "This is a good cause";

        const donate = await charity.connect(donor1)["donate(string)"];
        await donate(purpose);

        const donationsNumber = await charity.totalDonationNumber();

        const donations = await charity.getDonationsRecord();
        const donorAddress = donations[Number(donationsNumber) - 1].donor;
        const donationPurpose = donations[Number(donationsNumber) - 1].message;

        expect(donationsNumber).to.equal(1);
        expect(donorAddress).to.equal(donor1.address);
        expect(donationPurpose).to.equal(purpose);
      });
    });

    describe("Donor", function () {
      it("should allow anyone to donate", async () => {
        const { charity, admin, donor3, beneficiary } = await loadFixture(
          deployCharityFixture,
        );

        //Admin Donation
        const adminDonate = await charity.connect(admin)["donate()"];
        await adminDonate();

        let donationsNumber = await charity.totalDonationNumber();

        let donations = await charity.getDonationsRecord();
        let donorAddress = donations[Number(donationsNumber) - 1].donor;

        expect(donationsNumber).to.equal(1);
        expect(donorAddress).to.equal(admin.address);

        //Donor Donation
        const donorDonate = await charity.connect(donor3)["donate()"];
        await donorDonate({ value: 1000 });

        donationsNumber = await charity.totalDonationNumber();
        donations = await charity.getDonationsRecord();
        donorAddress = donations[Number(donationsNumber) - 1].donor;

        expect(donationsNumber).to.equal(2);
        expect(donorAddress).to.equal(donor3.address);
        expect(await charity.getTotalAmount()).to.equal(1000);

        //Beneficiary Donation
        const beneficiaryDonate = await charity.connect(beneficiary)[
          "donate(string)"
        ];
        await beneficiaryDonate("I want to support me", { value: 10 });

        donationsNumber = await charity.totalDonationNumber();
        donations = await charity.getDonationsRecord();
        donorAddress = donations[Number(donationsNumber) - 1].donor;

        const purpose = donations[Number(donationsNumber) - 1].message;

        expect(donationsNumber).to.equal(3);
        expect(donorAddress).to.equal(beneficiary.address);
        expect(purpose).to.equal("I want to support me");
        expect(await charity.getTotalAmount()).to.equal(1010);
      });
    });
  });

  describe("Unit Tests", function () {
    it("getTotalAmount: should be able to query total donation raised", async () => {
      const { charity } = await loadFixture(deployCharityFixture);
      expect(await charity.getTotalAmount()).to.equal(0);
    });

    it("getDonationsRecord: should be able to query donor list", async () => {
      const { charity } = await loadFixture(deployCharityFixture);
      expect(await charity.getDonationsRecord()).to.instanceof(Object);
    });
  });
});
