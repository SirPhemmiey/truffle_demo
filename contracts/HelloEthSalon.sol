pragma solidity ^0.4.4;


contract HelloEthSalon {
  string message = "Hello Ethereum Salon";
  function HelloEthSalon() public {
    // constructor
  }
  function getMessage() returns (string) {
        return message;
    }
}
