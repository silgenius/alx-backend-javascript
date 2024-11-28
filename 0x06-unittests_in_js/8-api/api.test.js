const { describe, it } = require('mocha');
const chai = require('chai');
const request = require('request');
const { expect } = chai;

const url = 'http://localhost:7865/'
describe("test express web app", function() {
    it("tests that the web app returns the Correct Status code and resp", function(done) {
        request(url, (error, response, body) => {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(200)
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    })
})