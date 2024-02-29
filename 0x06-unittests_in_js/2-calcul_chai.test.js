#!/usr/bin/node

const {expect} = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  context('#SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1, 1)).to.equal(2);
    });

    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 3.7, 2.3)).to.equal(6);
    });

    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 5.1, 1.9)).to.equal(7);
    });
  });

  context('#SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1, 1)).to.equal(0);
    });

    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });

    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.1, 1.1)).to.equal(2);
    });

    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.1, 3.0)).to.equal(-2);
    });
  })

  context('#DIVIDE', () => {
    it('should return the result of division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1, 2)).to.equal(0.5);
    });

    it('should return the result of division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1, 0.2)).to.equal('Error');
    });

    it('should return the result of division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1, 0.5)).to.equal(1);
    });

    it('should return the result of division of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.1, 3.0)).to.equal(0.3333333333333333);
    });
  });
});
