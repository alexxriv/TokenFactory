pragma solidity >=0.5.16;

import "./Token.sol";



contract Factory{
    event TokenCreated(address tokenAddress);

    modifier costs(uint price) {
        if (msg.value >= price) {
            _;
        }
    }

    uint price;
    address payable owner;

    constructor(uint initialPrice) public { price = initialPrice; owner = msg.sender; }

    
    modifier onlyOwner {
        require(
            msg.sender == owner,
            "Only owner can call this function."
        );
        _;
    }

    
    function deployNewToken(string memory name, string memory symbol, uint256 totalSupply, bool burnable, bool mintable) 
    public payable costs(price) returns (address tokenAddress) {
        Token t = new Token(name, symbol, totalSupply, msg.sender, burnable, mintable);
        emit TokenCreated(address(t));
        return address(t);
    }

    function changePrice(uint _price) public onlyOwner {
        price = _price;
    }
    uint bal;
    function withdrawFunds() public onlyOwner {
        bal = address(this).balance;
        address(owner).transfer(bal);
    }
    
    
}

