#!/usr/bin/node

const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(3.7, 2.3), 6);
    assert.strictEqual(calculateNumber(-1.7, -2), -4);
    assert.strictEqual(calculateNumber(-1, -2.7), -4);
  });

  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(5.1, 1.9), 7);
  });
});
