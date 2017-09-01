const SafeMath = artifacts.require('./SafeMath.sol');
const Token = artifacts.require(''./Token.sol);
const ICO = artifacts.require('./ICO.sol');

const h = require('../scripts/helper_functions.js');
const ether = h.ether;
const getBalance = h.getBalance;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const assert = chai.assert;
const expect = chai.expect;
chai.should();
chai.use(chaiAsPromised);

contract("Token", async function(accounts) {
    it("should be ERC20 compatible");
    it("should be zeppelin audited");
    it("should be controlled by ICO");
   it("should start with constructor params");
   it("should start with totalSupply of 0");
   it("should start with disabled transfers");
   it("should start with enabled minting");
   it("should transfer tokens when transfers are enabled");
   it("should not transfer tokens when transfers are disabled");
   it("should enable transfers by owner request");
   it("should not enable transfers by non-owner request");
   it("should stop minting by owner request");
   it("should not stop minting by non-owner request");
   it("should store frozen and confirmed tokens");
    it("should mint frozen tokens by owner request");
    it("should not mint tokens by non-owner request");
    it("should not mint tokens when minting is stopped");
   it("should activate tokens by owner request");
   it("should not activate tokens by non-owner request");
   it("should not accept payments");
   it("should store KYC and AML addresses");
   it("should add KYC entry by owner request");
   it("should not add KYC entry by non-owner request");
   it("should not add AML entry by non-owner request");
   it("should count payments amount by address");
});

contract("ICO", async function(accounts) {
    it("should implement uncapped crowdsale functionality");
    it("should be zeppelin audited");
    it("should start with constructor params");
    it("should own our token");
    it("should accept eth payments");
    it("should accept btc payments");
    it("should tran")

    it("should accept eth payments");
    it("should accept btc payments");
    it("should send payments to wallet");
    it("should be initialized with token and params");
    it("should have constant price");
    it("should count bonus");
    it("should increase tokens by price");
    it("should increase more tokens in first hour");
    it("should check total payments per address");
    it("should mint frozen tokens for payment");
    it("should not mint tokens when is not active");
    it("should be deactivated by hard cap");
    it("should be deactivated by timelimit");
    it("should accept requests to confirm tokens");
    it("should confirm KYC");
    it("should confirm AML");
    it("should accept requests for activation");
    it("should activate tokens by request if KYC is done for user " +
        "and total payments less than AML limit");
    it("should activate tokens by request if KYC and AML is done");
    it("should not activate tokens if KYC is not done");
    it("should not activate tokens if AML is done but KYC is not done " +
        "for over-AML-limit payments");
    it("should not activate tokens if KYC is done but AML is not done" +
        "for over-AML-limit payments");
    it("should mint tokens only when ICO is active");
    it("should activate tokens even after ICO end");
    it("should create tokens for buyer");
    it("should be canceled after end");
    it("should own the token");
})