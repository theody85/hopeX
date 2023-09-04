import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Charity", function () {
  async function deployCharityFixture() {
    const [admin, beneficiary, donor1, donor2, donor3, other] =
      await ethers.getSigners();

    const Charity = await ethers.getContractFactory("Charity");

    const charity = await Charity.deploy();

    //Add beneficiary
    await charity
      .connect(admin)
      .addBeneficiary(beneficiary.address, "Beneficiary_1", "Needs support");

    return { charity, admin, beneficiary, donor1, donor2, donor3, other };
  }

  describe("Donation", function () {
    describe("Amount", function () {
      it("should be able to donate 0 MATIC", async () => {
        const { charity, donor1 } = await loadFixture(deployCharityFixture);

        //Value defaults to 0
        const donate = charity.connect(donor1)["donate()"];
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

        const donate = charity.connect(donor2)["donate()"];
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

    it("getDonationsRecord: should be able to query donations", async () => {
      const { charity } = await loadFixture(deployCharityFixture);
      expect(await charity.getDonationsRecord()).to.instanceof(Array);
    });

    it("getDonorList: should be able to query donor list", async () => {
      const { charity } = await loadFixture(deployCharityFixture);
      expect(await charity.getDonorList()).to.instanceof(Array);
    });
  });

  describe("Admin: Add Beneficiary", function () {
    it("should be able to change beneficiary if admin ", async () => {
      const { charity, other } = await loadFixture(deployCharityFixture);

      await charity.addBeneficiary(
        other.address,
        "Beneficiary_2",
        "Needy but brilliant",
      );

      expect((await charity.beneficiary())._address).to.equal(other.address);
      expect((await charity.beneficiary()).name).to.equal("Beneficiary_2");
    });

    it("should not be able to set beneficiary if not admin ", async () => {
      const { charity, donor1, other } = await loadFixture(
        deployCharityFixture,
      );

      await expect(
        charity
          .connect(donor1)
          .addBeneficiary(
            other.address,
            "Beneficiary_2",
            "Needy but brilliant",
          ),
      ).to.be.revertedWith("You do not have the access rights!");
    });

    it("should not be able to set admin as beneficiary ", async () => {
      const { charity, admin } = await loadFixture(deployCharityFixture);

      await expect(
        charity.addBeneficiary(
          admin.address,
          "Beneficiary_3",
          "I want to squander the money",
        ),
      ).to.be.revertedWith("Admin can't be beneficiary!");
    });

    it("should not be able to set admin as beneficiary ", async () => {
      const { charity, admin } = await loadFixture(deployCharityFixture);

      await expect(
        charity.addBeneficiary(
          admin.address,
          "Beneficiary_3",
          "I want to squander the money",
        ),
      ).to.be.revertedWith("Admin can't be beneficiary!");
    });
    it("should not be able to set the zero address as beneficiary address", async () => {
      const { charity } = await loadFixture(deployCharityFixture);

      await expect(
        charity.addBeneficiary(
          "0x0000000000000000000000000000000000000000",
          "Beneficiary",
          "I don't want anyone to withdraw",
        ),
      ).to.be.revertedWith("Not valid address!");
    });
  });

  describe("Admin: Halt Donations", function () {
    it("should halt donations activities if admin", async () => {
      const { charity } = await loadFixture(deployCharityFixture);

      await charity.toggleDonationActive();

      await expect(charity.getDonationsRecord()).to.be.revertedWith(
        "Donations have been halted",
      );
      await expect(charity.getDonorList()).to.be.revertedWith(
        "Donations have been halted",
      );
      await expect(charity.getTotalAmount()).to.be.revertedWith(
        "Donations have been halted",
      );
      await expect(charity["donate()"]()).to.be.revertedWith(
        "Donations have been halted",
      );
      await expect(
        charity["donate(string)"]("I love charity"),
      ).to.be.revertedWith("Donations have been halted");
    });

    it("should not halt donation activities if not admin", async () => {
      const { charity, donor1, beneficiary } = await loadFixture(
        deployCharityFixture,
      );

      await expect(
        charity.connect(donor1).toggleDonationActive(),
      ).to.be.revertedWith("You do not have the access rights!");

      await expect(
        charity.connect(beneficiary).toggleDonationActive(),
      ).to.be.revertedWith("You do not have the access rights!");
    });
  });

  describe("Withdrawal", function () {
    it("should be able to withdraw if beneficiary", async () => {
      const { charity, donor2, beneficiary } = await loadFixture(
        deployCharityFixture,
      );

      expect(await charity.getTotalAmount()).to.equal(0);
      await charity.connect(donor2)["donate()"]({ value: "20" });
      expect(await charity.getTotalAmount()).to.equal(20);

      await charity.connect(beneficiary).withdraw();
      expect(await charity.getTotalAmount()).to.equal(0);
    });

    it("should not be able to withdraw if not beneficiary", async () => {
      const { charity, donor2, admin } = await loadFixture(
        deployCharityFixture,
      );

      expect(await charity.getTotalAmount()).to.equal(0);
      await charity.connect(donor2)["donate()"]({ value: "20" });
      expect(await charity.getTotalAmount()).to.equal(20);

      await expect(charity.connect(admin).withdraw()).to.be.revertedWith(
        "You do not have the access rights!",
      );
      expect(await charity.getTotalAmount()).to.equal(20);
    });

    it("should not be able to withdraw if donations have been halted", async () => {
      const { charity, donor2, beneficiary } = await loadFixture(
        deployCharityFixture,
      );

      expect(await charity.getTotalAmount()).to.equal(0);
      await charity.connect(donor2)["donate()"]({ value: "20" });
      expect(await charity.getTotalAmount()).to.equal(20);

      await charity.toggleDonationActive();

      await expect(charity.connect(beneficiary).withdraw()).to.be.revertedWith(
        "Donations have been halted",
      );
    });

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
});
