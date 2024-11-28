const { describe, it } = require('mocha');
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe("Using stubs", function() {
    let UtilsCalculateNumberStub;
    let result;

    beforeEach(function () {
        UtilsCalculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        UtilsCalculateNumberStub.returns(10);
        result = sinon.spy(console, 'log');
    });

    afterEach(function() {
        UtilsCalculateNumberStub.restore();
        result.restore();
    });

    it("test 1", function() {

        sendPaymentRequestToApi(100, 20);
        expect(UtilsCalculateNumberStub.calledOnce).to.be.true;
        expect(UtilsCalculateNumberStub.calledWith('SUM', 100, 20))
        expect(result.calledWith('The total is: 10')).to.be.true
    });

    it("test 2", function() {
        sendPaymentRequestToApi(10, 10);
        expect(UtilsCalculateNumberStub.calledOnce).to.be.true;
        expect(UtilsCalculateNumberStub.calledWith('SUM', 10, 10))
        expect(result.calledWith('The total is: 10')).to.be.true
    })
});