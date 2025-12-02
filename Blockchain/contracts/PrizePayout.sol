// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PrizePayout {
    address public admin;

    event PrizePaid(address indexed winner, uint256 amountWei, bytes32 ref);

    constructor(address _admin) {
        admin = _admin;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "not admin");
        _;
    }

    function payPrize(address winner, uint256 amountWei) external onlyAdmin {
        require(winner != address(0), "bad winner");
        (bool ok, ) = payable(winner).call{value: amountWei}("");
        require(ok, "transfer failed");
        emit PrizePaid(winner, amountWei, keccak256(abi.encodePacked(winner, amountWei, block.timestamp)));
    }

    receive() external payable {}
}
