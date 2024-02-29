#!/usr/bin/node

const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('#SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 1), 2);
    });

    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.7, 2.3), 6);
    });

    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 5.1, 1.9), 7);
    });
  });

  describe('#SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 1), 0);
    });

    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.1, 1.1), 2);
    });

    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.1, 3.0), -2);
    });
  });

  describe('#DIVIDE', () => {
    it('should return the result of division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 2), 0.5);
    });

    it('should return the result of division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.2), 'Error');
    });

    it('should return the result of division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1, 0.5), 1);
    });

    it('should return the result of division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.1, 3.0), 0.3333333333333333);
    });
  });
});
