const fetch = require('node-fetch');

const AvalaraTax = {};
const apiKey = process.env.API_KEY;

AvalaraTax.search = (country, postal) => {
  console.log('hi')
  return fetch(`https://taxrates.api.avalara.com:443/postal?country=${country}&postal=${postal}`,
  {
    headers: {
      'Authorization': 'AvalaraApiKey ' + apiKey
    }
  });
}

module.exports = AvalaraTax;
