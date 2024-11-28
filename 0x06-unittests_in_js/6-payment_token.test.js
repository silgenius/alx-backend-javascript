const { describe, it } = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const { expect } = chai;

const getPaymentTokenFromAPI = require('./6-payment_token')

describe("getPaymentTokenFromAPI", function() {
    it("calls getPaymentTokenFromAPI with arg True", function(done) {
        getPaymentTokenFromAPI(true)
        .then((result) => {
            expect(result).to.deep.equal({data: 'Successful response from the API' })
            done();
        })
        .catch(done)
    });
});