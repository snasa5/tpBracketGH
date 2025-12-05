
// contracts/Pool.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Pool {
    address public owner;
    mapping(address => uint256) public balances;

    constructor() {
        owner = msg.sender;
    }

    function joinPool() public payable {
        balances[msg.sender] += msg.value;
    }

    function payout(address payable winner) public {
        require(msg.sender == owner, "Only owner can payout");
        uint256 amount = address(this).balance;
        winner.transfer(amount);
    }
}
