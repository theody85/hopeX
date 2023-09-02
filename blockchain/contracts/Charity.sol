// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Charity {
    struct Donation {
        uint id;
        uint amount;
        address donor;
        uint timestamp;
        string message;
    }

    struct Beneficiary {
        address payable _address;
        string name;
        string story;
    }

    mapping(uint => Donation) donations;
    mapping(uint => address) donors;

    uint public totalDonationAmount;
    uint totalDonationNumber;
    Beneficiary public beneficiary;
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    //Donation functions
    function donate(uint _amount, string memory _message) external payable {
        totalDonationNumber++;
        totalDonationAmount += _amount;

        donations[totalDonationNumber] = Donation(
            totalDonationNumber,
            _amount,
            msg.sender,
            block.timestamp,
            _message
        );
        donors[totalDonationNumber] = msg.sender;
    }

    function donate(uint _amount) public payable {
        totalDonationNumber++;
        totalDonationAmount += _amount;

        donations[totalDonationNumber] = Donation(
            totalDonationNumber,
            _amount,
            msg.sender,
            block.timestamp,
            ""
        );
        donors[totalDonationNumber] = msg.sender;
    }

    function getTotalAmount() public view returns (uint) {
        return totalDonationAmount;
    }

    function getDonorList() public view returns (address[] memory) {
        address[] memory donorList = new address[](totalDonationNumber);

        for (uint i = 0; i < totalDonationNumber; i++) {
            donorList[i] = donors[i++];
        }

        return donorList;
    }

    function getDonationsRecord() public view returns (Donation[] memory) {
        Donation[] memory donationsRecord = new Donation[](totalDonationNumber);

        for (uint i = 0; i < totalDonationAmount; i++) {
            donationsRecord[i] = donations[i++];
        }

        return donationsRecord;
    }

    modifier isAdmin() {
        require(admin == msg.sender, "You do not have the access rights!");
        _;
    }

    modifier validAddress(address _address) {
        require(admin != _address, "Admin can't be beneficiary!");
        require(_address != address(0), "Not valid address!");
        _;
    }

    //administrative functions
    function addBeneficiary(
        address payable _address,
        string memory _name,
        string memory _story
    ) public isAdmin validAddress(_address) {
        beneficiary.name = _name;
        beneficiary._address = _address;
        beneficiary.story = _story;
    }

    function stopDonation() public isAdmin {}

    modifier isBeneficiary() {
        require(
            beneficiary._address == msg.sender,
            "You do not have the access rights!"
        );
        _;
    }

    //Beneficiary functions
    function withdraw() public isBeneficiary {
        uint totalDonationAmount = address(this).balance;

        (bool success, ) = beneficiary._address.call{
            value: totalDonationAmount
        }("");
        require(success, "Failed to send Matic");
    }
}
