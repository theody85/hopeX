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

    uint public totalDonationNumber;
    Beneficiary public beneficiary;
    address public admin;

    bool isHalted;

    constructor() {
        admin = msg.sender;
    }

    modifier isEmergency() {
        require(!isHalted, "Donations have been halted");
        _;
    }

    //Donation functions
    function donate(string memory _message) external payable isEmergency {
        totalDonationNumber++;

        donations[totalDonationNumber] = Donation(
            totalDonationNumber,
            msg.value,
            msg.sender,
            block.timestamp,
            _message
        );
        donors[totalDonationNumber] = msg.sender;
    }

    function donate() external payable isEmergency {
        totalDonationNumber++;

        donations[totalDonationNumber] = Donation(
            totalDonationNumber,
            msg.value,
            msg.sender,
            block.timestamp,
            ""
        );
        donors[totalDonationNumber] = msg.sender;
    }

    function getTotalAmount() public view isEmergency returns (uint) {
        return address(this).balance;
    }

    function getDonorList() public view isEmergency returns (address[] memory) {
        address[] memory donorList = new address[](totalDonationNumber);

        for (uint i = 0; i < totalDonationNumber; i++) {
            donorList[i] = donors[i + 1];
        }

        return donorList;
    }

    function getDonationsRecord()
        public
        view
        isEmergency
        returns (Donation[] memory)
    {
        Donation[] memory donationsRecord = new Donation[](totalDonationNumber);

        for (uint i = 0; i < totalDonationNumber; i++) {
            donationsRecord[i] = donations[i + 1];
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

    function toggleDonationActive() public isAdmin {
        isHalted = !isHalted;
    }

    modifier isBeneficiary() {
        require(
            beneficiary._address == msg.sender,
            "You do not have the access rights!"
        );
        _;
    }

    //Beneficiary functions
    function withdraw() public isEmergency isBeneficiary {
        (bool success, ) = beneficiary._address.call{
            value: address(this).balance
        }("");
        require(success, "Failed to send Matic");
    }
}
