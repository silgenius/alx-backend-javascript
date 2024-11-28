const { describe, it } = require('mocha');
const chai = require('chai');
const request = require('request');
const { response, json } = require('express');
const { expect } = chai;

describe("test express web app", function() {
    it("tests that the web app returns the Correct Status code and resp", function(done) {
        request('http://localhost:7865/', (error, response, body) => {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(200)
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    })
})

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
});

describe("test express web app", function() {
    it("tests an endpoint GET /available_payments", function(done) {
        request('http://localhost:7865/available_payments', (error, response, body) => {
            if (error) {
                done(error);
            }

            const expectedResponse = {
                payment_methods: {
                  credit_cards: true,
                  paypal: false
                }
            }
            const ParsedBody = JSON.parse(body)
            // const ParsedExpectedResponse = JSON.parse(expectedResponse)
            expect(response.statusCode).to.equal(200)
            expect(ParsedBody).to.deep.equal(expectedResponse);
            done();
        });
    })
})

describe("test express web app", function() {
    it("tests an endpoint POST /login that returns the message Welcome :username", function(done) {
        request.post({
            url: 'http://localhost:7865/login',
            json: true,
            body: { userName: 'John Doe' }
        }, (error, response, body) => {
            if (error) {
                done(error);
            }
            expect(response.statusCode).to.equal(200)
            expect(body).to.equal('Welcome John Doe');
            done();
        });
    })
})