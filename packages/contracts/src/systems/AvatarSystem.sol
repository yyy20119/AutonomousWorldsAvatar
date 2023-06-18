// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { Avatar } from "../codegen/Tables.sol";

contract AvatarSystem is System {
  function update(string memory url) public {
    Avatar.set(_msgSender(),url);
  }
}