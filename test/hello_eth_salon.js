let HelloEthSalon = artifacts.require('./HelloEthSalon.sol');
contract("HelloEthSalon:getMessage", function(accounts) {
    it("should return a correct string", function(done) {
        let hello_eth_salon = HelloEthSalon.deployed();
        hello_eth_salon.then(function(contract) {
            return contract.getMessage.call(); //important
        }).then(function(result) {
            assert.isTrue(result == "Hello Ethereum Salon");
            done();
        })
    })
})