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

describe('Cart page', () => {
  it('should return the correct status code for a valid cart ID', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return a 404 status code for an invalid cart ID', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('should return the correct message for POST /login', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: true,
      body: { userName: 'Betty' },
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return the correct paymet methods for GET /available_payments', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(
        {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        }
      );
      done();
    });
  });
});
