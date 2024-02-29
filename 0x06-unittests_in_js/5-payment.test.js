#!/usr/bin/node

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount 100 and totalShipping 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount 10 and totalShipping 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});

