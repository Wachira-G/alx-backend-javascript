#!/usr/bin/node

const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  it('should return the correct status code and result for GET /', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
