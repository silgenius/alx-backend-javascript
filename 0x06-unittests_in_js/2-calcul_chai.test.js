const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./2-calcul_chai');
const { describe, it } = require("mocha");

describe("Test calculateNumber(type, a, b)",function() {
    it("takes in type(sum) and find the rounded result", function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it("takes in type(subtract) and return the rounded result", function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it("takes in type(divide) and return the rounded result", function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
    it("takes in type(divide) with denominator as 0", function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});