#!/usr/bin/node

/**
 * Retrieves a payment token from an API.
 * @param {boolean} success - Indicates whether the API call was successful.
 * @returns {Promise} - Resolved promise
 * with the object { data: 'Successful response from the API' } if success is true.
 */
function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({data: 'Successful response from the API' });
  } else {
    // If success is false, do nothing (no promise returned).
  }
}

module.exports = getPaymentTokenFromAPI;

