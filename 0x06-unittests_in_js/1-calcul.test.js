const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber(type, a, b)', () => {
  it('takes in type(sum) and find the rounded result', () => {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('takes in type(subtract) and return the rounded result', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('takes in type(divide) and return the rounded result', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('takes in type(divide) with denominator as 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
