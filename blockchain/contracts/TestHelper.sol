// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import {Withdraw} from "./lib/withdraw.sol";

contract TestHelper {
    using Withdraw for address;

    function withdraw(address _to, uint _value) public {
        _to.withdraw(_value);
    }
}
