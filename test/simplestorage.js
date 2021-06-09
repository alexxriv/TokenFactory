
const FACTORY = artifacts.require("./Factory.sol");
const TOKEN = artifacts.require("./Token.sol");

contract("Factory", async accounts => {
  let Factory;
  let Token;

  beforeEach("Create new instance of factory contract", async () => {
    Factory = await FACTORY.deployed();
  });

  it("Should use factory to deploy new token", async () => {
    Token = await Factory.deployNewToken(
      "Demo Token",
      "DEMO",
      1000000, true,true,
      {from: accounts[4],
      value: "30000000000000000"}
    );
    let TokenInstance = await TOKEN.at(Token.logs[0].args.tokenAddress);
    let balance = await TokenInstance.balanceOf.call(accounts[4]);
    assert.equal(balance.toString(), "1000000");
  });


  it("Should change cost of function and deploy new tokent", async () => {
    await Factory.changePrice("10", {from: accounts[0]})
    Token = await Factory.deployNewToken(
      "Demo Token",
      "DEMO",
      10000000, true, true,
      {from: accounts[0],
      value: "10"}
    );
    let TokenInstance = await TOKEN.at(Token.logs[0].args.tokenAddress);
    let balance = await TokenInstance.balanceOf.call(accounts[0]);
    assert.equal(balance.toString(), "10000000");

  });

  it("Should NOT change cost of function and deploy new tokent", async () => {
    try {await Factory.changePrice("1000000", {from: accounts[3]})}
    catch{
    Token = await Factory.deployNewToken(
      "Demo Token",
      "DEMO",
      10000000, true, true,
      {from: accounts[0],
      value: "10"}
    );
    let TokenInstance = await TOKEN.at(Token.logs[0].args.tokenAddress);
    let balance = await TokenInstance.balanceOf.call(accounts[0]);
    assert.equal(balance.toString(), "10000000");}
  });
  it("Factory should have eth balance", async () => {

    let balance2 = await web3.eth.getBalance(FACTORY.address)
    assert.equal(balance2.toString(), "30000000000000020");

  });


  it("Should withdraw balance of contract to owner", async () => {
    await Factory.changePrice("10", {from: accounts[0]})
  
    await Factory.withdrawFunds({from: accounts[0]})
    let balance2 = await web3.eth.getBalance(FACTORY.address)
    assert.equal(balance2.toString(), "0");

  });



  it("Should burn and mint tokens correctly", async () => {

    Token = await Factory.deployNewToken(
      "Demo Token",
      "DEMO",
      10000000, true, true,
      {from: accounts[0],
      value: "10"}
    );
    let TokenInstance = await TOKEN.at(Token.logs[0].args.tokenAddress);
    let balance = await TokenInstance.balanceOf.call(accounts[0]);
    assert.equal(balance.toString(), "10000000");
    await TokenInstance.burn("10000000");
    balance = await TokenInstance.balanceOf.call(accounts[0]);
    assert.equal(balance.toString(), "0");
    await TokenInstance.mint("100000000");
    balance = await TokenInstance.balanceOf.call(accounts[0]);
    assert.equal(balance.toString(), "100000000")
  });

  it("Should NOT withdraw balance of contract to other address", async () => {

    try{ 
      Factory.withdrawFunds({from: accounts[4]})
  } catch{
    let balance = await web3.eth.getBalance(FACTORY.address)
    assert.equal(balance, "10")
  }
  });

  it("Should not burn and mint tokens correctly", async () => {
    await Factory.changePrice("10", {from: accounts[0]})
    Token = await Factory.deployNewToken(
      "Demo Token",
      "DEMO",
      10000000, false, false,
      {from: accounts[0],
      value: "10"}
    );
    let TokenInstance = await TOKEN.at(Token.logs[0].args.tokenAddress);
    let balance = await TokenInstance.balanceOf.call(accounts[0]);
    assert.equal(balance.toString(), "10000000");
    try {
      await TokenInstance.burn("10000000");
      } catch {
        balance = await TokenInstance.balanceOf.call(accounts[0]);
        assert.equal(balance.toString(), "10000000");
      }

    try {
      await TokenInstance.mint("100000000");
    } catch{
      balance = await TokenInstance.balanceOf.call(accounts[0]);
      assert.equal(balance.toString(), "10000000")
    }

  });


});
