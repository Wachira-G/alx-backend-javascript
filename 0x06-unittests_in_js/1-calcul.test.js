#!/usr/bin/node

const assert = require('assert');
const calculatedNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('#SUM', () => {
    it('should return the sum of rounded numbers', () => {

      assert.strictEqual(calculatedNumber('SUM', 1, 1), 2);

      assert.strictEqual(calculatedNumber('SUM', 3.7, 2.3), 6);

      assert.strictEqual(calculatedNumber('SUM', 5.1, 1.9), 7);
    });
  });

  describe('#SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {

      assert.strictEqual(calculatedNumber('SUBTRACT', 1, 1), 0);

      assert.strictEqual(calculatedNumber('SUBTRACT', 3, 1), 2);

      assert.strictEqual(calculatedNumber('SUBTRACT', 3.1, 1.1), 2);

      assert.strictEqual(calculatedNumber('SUBTRACT', 1.1, 3.0), -2);
    });
  })

  describe('#DIVIDE', () => {
    it('should return the result of division of rounded numbers', () => {

      assert.strictEqual(calculatedNumber('DIVIDE', 1, 2), 0.5);

      assert.strictEqual(calculatedNumber('DIVIDE', 1, 0.2), 'Error');

      assert.strictEqual(calculatedNumber('DIVIDE', 1, 0.5), 1);

      assert.strictEqual(calculatedNumber('DIVIDE', 1.1, 3.0), 0.3333333333333333);
    });
  });
});
