#!/usr/bin/node

const assert = require('assert');
const calculatedNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {

    assert.strictEqual(calculatedNumber(3.7, 2.3), 6);

    assert.strictEqual(calculatedNumber(5.1, 1.9), 7);
  });
});
