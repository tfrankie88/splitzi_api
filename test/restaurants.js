const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index');
const db = require('../config/db');

const Restaurant = require('../models/restaurant');

describe('Restaurants', () => {

  let token;

  after((done) => {
    //Delete all records from users table
    db.none('DELETE FROM restaurants').then(() => {
      done();
    });
  });

  it('POST /restaurants/sign_up should return a 201 status code and should give us back the newly created object', (done) => {
    request(app)
    .post('/restaurant/sign_up')
    .send({
      restaurant: {
        first_name: 'Bob',
        last_name: 'Belcher',
        email: 'flippin@aol.com',
        password: 'chiveMyCar',
        restaurant_name: 'Bob\'s Burgers',
        country: 'USA',
        postal: 17740,
        access: false
      }
    })
    .end((err, results) => {
      // console.log(results.body);
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      expect(results.body).to.not.be.an.instanceOf(Array);
      done();
    });
  });
})
