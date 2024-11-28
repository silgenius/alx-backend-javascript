const { describe, it } = require('mocha');
const chai = require('chai');
const request = require('request');
const { expect } = chai;

describe("test express web app", function() {
    it("tests GET /cart/:id(int)", function(done) {
        request('http://localhost:7865/cart/12', (error, response, body) => {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(200)
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it("tests GET /cart/:id(str)", function(done) {
        request('http://localhost:7865/cart/hello', (error, response, body) => {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(404)
            done();
        });
    })
})