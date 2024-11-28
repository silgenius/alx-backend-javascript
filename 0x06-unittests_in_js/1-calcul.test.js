const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber function tests', function() {
  describe('SUM operation', function() {
    it('should add two positive numbers correctly', function() {
      assert(calculateNumber('SUM', 3.2, 4.6), 8);
    });

    it('should add two negative numbers correctly', function() {
      assert(calculateNumber('SUM', -3.2, -4.6), -8);
    });

    it('should round numbers correctly before adding', function() {
      assert(calculateNumber('SUM', 3.7, 4.3), 8);  // rounds 3.7 to 4 and 4.3 to 4
    });

    it('should handle mixed positive and negative numbers', function() {
      assert(calculateNumber('SUM', 3.2, -4.6), -2);  // rounds 3.2 to 3 and -4.6 to -5
    });
  });

  describe('SUBTRACT operation', function() {
    it('should subtract two positive numbers correctly', function() {
      assert(calculateNumber('SUBTRACT', 5.8, 3.4), 2);  // rounds 5.8 to 6 and 3.4 to 3
    });

    it('should subtract two negative numbers correctly', function() {
      assert(calculateNumber('SUBTRACT', -5.8, -3.4), -2);  // rounds -5.8 to -6 and -3.4 to -3
    });

    it('should handle subtraction of a positive and a negative number', function() {
      assert(calculateNumber('SUBTRACT', 7.9, -2.4), 11);  // rounds 7.9 to 8 and -2.4 to -2
    });
  });

  describe('DIVIDE operation', function() {
    it('should divide two positive numbers correctly', function() {
      assert(calculateNumber('DIVIDE', 7.5, 2.4), 3);  // rounds 7.5 to 8 and 2.4 to 2, 8 / 2 = 4
    });

    it('should divide two negative numbers correctly', function() {
      assert(calculateNumber('DIVIDE', -7.5, -2.4), 3);  // rounds -7.5 to -8 and -2.4 to -2, -8 / -2 = 4
    });

    it('should divide a positive by a negative number correctly', function() {
      assert(calculateNumber('DIVIDE', 7.5, -2.4), -3);  // rounds 7.5 to 8 and -2.4 to -2, 8 / -2 = -4
    });

    it('should divide by zero and return "Error"', function() {
      assert(calculateNumber('DIVIDE', 5.7, 0), 'Error');  // Division by zero
    });

    it('should handle rounding correctly before dividing', function() {
      assert(calculateNumber('DIVIDE', 7.7, 2.2), 4);  // rounds 7.7 to 8 and 2.2 to 2, 8 / 2 = 4
    });
});

  describe('Edge Cases', function() {
    it('should round numbers correctly even when already integers', function() {
      assert(calculateNumber('SUM', 5, 5), 10);  // No rounding needed, just sum the integers
    });

    it('should handle large numbers correctly', function() {
      assert(calculateNumber('SUM', 1000000000.5, 2000000000.5), 3000000000);  // rounds both to 1000000001 and 2000000001, sum them
    });

    it('should handle very small numbers correctly', function() {
      assert(calculateNumber('SUM', 0.000001, 0.000002), undefined);  // rounds both to 0
    });
  });
});
