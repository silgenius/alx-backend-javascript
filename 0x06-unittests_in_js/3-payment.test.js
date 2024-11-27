const { describe, it } = require('mocha');
const sinon = require('sinon');
const chai = require('chai');

const { expect } = chai;

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('test send Payment Request API', () => {
  it('uses spies', () => {
    const UtilsSPY = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);

    expect(UtilsSPY.calculateNumber.calledOnce).to.be.true;
    expect(UtilsSPY.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    UtilsSPY.calculateNumber.restore();
  });
});
