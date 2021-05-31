var Factory = artifacts.require("./Factory.sol");

module.exports = function(deployer) {
  const initialCost = "100"
  deployer.deploy(Factory, initialCost);
};

