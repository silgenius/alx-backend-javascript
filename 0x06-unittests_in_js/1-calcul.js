/* eslint-disable consistent-return */

function calculateNumber(type, a, b) {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      if (b === 0) {
        return 'Error';
      }
      return Math.round(a) / Math.round(b);
    default:
  }
}

module.exports = calculateNumber;
