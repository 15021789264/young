// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title YoungBase
 * @dev Simple contract for the Young project on Base L2
 */
contract YoungBase {
    string public name = "Young Base Project";
    address public owner;
    
    event Deployed(address indexed deployer, uint256 timestamp);

    constructor() {
        owner = msg.sender;
        emit Deployed(msg.sender, block.timestamp);
    }

    function getNetwork() public pure returns (string memory) {
        return "Base L2";
    }
}
