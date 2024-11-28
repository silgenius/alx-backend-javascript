const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber(type, a, b)', () => {
  it('takes in type(sum) and find the rounded result', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('takes in type(sum) and find the negative rounded result', () => {
    assert.equal(calculateNumber('SUM', 1.4, -4.5), -3);
  });
  it('takes in type(sum) with a rounded arg and find the rounded result', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4), 5);
  });
  it('takes in type(sum) with both args rounded and find the negative rounded result', () => {
    assert.equal(calculateNumber('SUM', 1, 4), 5);
  });
  it("takes in 2 negative numbers as args", function() {
    assert.equal(calculateNumber('SUM', -3.7, -1.2), -5);
  });
  it('takes in type(subtract) with a rounded arg and return the rounded result', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4), -3);
  });
  it('takes in type(subtract) and return the negative rounded result', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('takes in type(subtract) and return the positive rounded result', () => {
    assert.equal(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
  });
  it('takes in type(divide) and return the rounded result', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('takes in type(divide) with a negative arg and return the rounded result', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, -4.5), -0.25);
  });
  it('takes in type(divide) with denominator as 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('takes in type(divide) with numerator as 0', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 1.4), 0);
  });
  it('takes in not supported type, expects undefined', () => {
    assert.equal(calculateNumber('MULTPLY', 0, 3), undefined);
  });
});
