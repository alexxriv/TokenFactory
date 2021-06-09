var Factory = artifacts.require("./Factory.sol");

module.exports = function(deployer) {
  const initialCost = "200000000000000000"
  deployer.deploy(Factory, initialCost);
};

