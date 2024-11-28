const { describe, it } = require('mocha');
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("Using stubs", function() {
    it("Stub the function Utils.calculateNumber to always return the same number 10", function() {
        const UtilsCalculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const result = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(UtilsCalculateNumberStub.calledOnce).to.be.true;
        expect(UtilsCalculateNumberStub.calledWith('SUM', 100, 20))
        expect(result.calledWith('The total is: 10'))

        UtilsCalculateNumberStub.restore();
        result.restore();
    });
});