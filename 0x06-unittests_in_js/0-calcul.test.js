const assert = require('assert');
const calculateNumber = require("./0-calcul");
const { describe, it } = require("mocha");


describe("calculateNumber", function() {
    it("takes int and return int", function() {
        assert.equal(calculateNumber(1, 3), 4)
    });
    it("takes int and float and return the sun of int", function() {
        assert.equal(calculateNumber(1, 3.7), 5)
    });
    it("takes in floats and return their sum in int", function() {
        assert.equal(calculateNumber(1.2, 3.7), 5)
    });
    it("takes in floats and return the sum of their of rounded int", function() {
        assert.equal(calculateNumber(1.5, 3.7), 6)
    });
    it("takes two negative numbers and return their sum", function() {
        assert.equal(calculateNumber(-4.3, 1.2), -3);
    });
});