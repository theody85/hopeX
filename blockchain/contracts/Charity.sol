// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./lib/withdraw.sol";

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

    Donation[] donations;
    address[] donors;

    uint public totalDonationNumber;
    Beneficiary public beneficiary;
    address public admin;

    bool isHalted;

    using Withdraw for address;

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

        donations.push(
            Donation(
                totalDonationNumber,
                msg.value,
                msg.sender,
                block.timestamp,
                _message
            )
        );
        donors.push(msg.sender);
    }

    function donate() external payable isEmergency {
        totalDonationNumber++;

        donations.push(
            Donation(
                totalDonationNumber,
                msg.value,
                msg.sender,
                block.timestamp,
                ""
            )
        );
        donors.push(msg.sender);
    }

    function getTotalAmount() public view isEmergency returns (uint) {
        return address(this).balance;
    }

    function getDonorList() public view isEmergency returns (address[] memory) {
        return donors;
    }

    function getDonationsRecord()
        public
        view
        isEmergency
        returns (Donation[] memory)
    {
        return donations;
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
    // function withdraw() public isEmergency isBeneficiary {
    //     (bool success, ) = beneficiary._address.call{
    //         value: address(this).balance
    //     }("");
    //     require(success, "Failed to send Matic");
    // }

    function withdraw() external isEmergency isBeneficiary {
        Withdraw.withdraw(beneficiary._address, address(this).balance);
    }
}
