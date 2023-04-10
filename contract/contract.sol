// SPDX-License-Identifier: KIT

pragma solidity >= 0.8;

import "./erc20.sol";

contract Test {
    constructor () erc20(10000000, "CryptoMonster", 12, "CMON"){
        approve(address(this), 10000000);

        // address owner = ;
        // address privateProvider = ;
        // address publicProvider = ;
        // address investor1 = ;
        // address investor2 = ;
        // address bestFriend = ;


    }

    enum Roles {owner, manadger, general, publicProv, privateProv }
    enum Phases {PublicPhas, PrivatePhas, preparation, notstarted}

    mapping (address => Roles) _idRole;
    mapping (address => bool) _whitelist;
    
    address _owner;
    
    uint time_start = 0;
    uint time_dif = 0;
    uint microether = 1e12;
    uint Privatecost = 720 * microether;
    uint Publiccost = 1000 * microether;
}