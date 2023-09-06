# hopeX Smart Contract and Frontend

## Overview

The **hopeX** project is a blockchain-based donation platform built on the Polygon network (formerly Matic). It facilitates and manages donations in MATIC cryptocurrency for various causes or organizations while ensuring transparency, security, and accountability. This repository contains the smart contract code, written in Solidity using the Hardhat development framework, and the frontend application built with Vite and TypeScript.

## Functional Requirements

### Donations

1. **Donate MATIC**: Users can send MATIC to the smart contract's address to make a donation. Donations can be of any value in MATIC, and donors can specify an optional message or purpose for their donation.

2. **Track Donations**: The contract keeps a record of all donations, including the donor's address, amount in MATIC, timestamp, and a unique donation ID or transaction hash.

3. **View Total Donations**: Users can query the total amount of MATIC donated.

4. **View Donor List**: The contract maintains a list of donors' addresses, which users can retrieve.

### Withdraw Funds

1. **Withdraw to Beneficiary**: A designated beneficiary address can initiate a withdrawal request to transfer donated MATIC funds to their address.

### Administrative Functions

1. **Set Beneficiary**: The contract owner/administrator can set or change the beneficiary's address.

2. **Emergency Stop**: There is a mechanism for the contract owner/administrator to pause or halt all contract operations in case of emergencies or vulnerabilities.

## Security Requirements

1. **Access Control**: Access to administrative functions is restricted to the contract owner/administrator. Donors do not have the ability to modify contract parameters or withdraw funds.

2. **Fund Safety**: Donated MATIC funds are stored securely and accessible only to the beneficiary.

3. **Emergency Measures**: The contract has a fail-safe mechanism to allow pausing or halting operations in case of security breaches or vulnerabilities.

## Compliance Requirements

1. **Transparency**: The contract provides a publicly accessible interface to view donation records, total donations in MATIC, and the list of donors.

## Gas Efficiency

1. **Gas Optimization**: The contract is designed to minimize gas costs for both donors and the beneficiary when interacting with the contract.

## Testing and Deployment

1. **Testing**: Comprehensive testing, including unit tests and integration tests, has been conducted on the smart contract code to ensure its reliability and security.

2. **Deployment**: The smart contract has been deployed on the Polygon test network (Mumbai) to verify its functionality and safety.

## Project Structure

- `blockchain/`: Contains the Solidity smart contract code.
- `frontend/`: Contains the Vite-based TypeScript frontend application for user interaction.

## Getting Started

To run the project locally for development or testing:

1. Clone this repository.
2. Navigate to the `blockchain/` directory and run `npm install` to install the necessary dependencies.
3. Deploy the smart contract to a Polygon test network of your choice.
4. Navigate to the `frontend/` directory and run `npm install` to install the frontend dependencies.
5. Update the frontend configuration to connect to the deployed contract on the Polygon test network.
6. Run the frontend application with `npm run dev`.

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the Polygon team for providing a robust and efficient blockchain platform for building decentralized applications.

I also extend my gratitude to the organizers of the free Web 3 bootcamp, sponsored by MasterCard and MEST Africa in partnership with Mowblox. This program played a pivotal role in shaping and inspiring the development of hopeX.

---

**hopeX** is a project aimed at making the world a better place through blockchain-based donations. Thank you for your interest and support!
