const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index');
const Taxes = require('../services/taxes');
const apiKey = process.env.API_KEY;


describe('Taxes', () => {

  it('GET /taxes/country/postal should return 200 status code and be an object', (done) => {
    request(app)
    .get('taxes/usa/11565')
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    });
  });

});
