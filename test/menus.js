const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index');
const db = require("../config/db");

const Restaurant = require('../models/restaurant');
const Menu = require('../models/menu');

describe('Menus', () => {

  let menu;
  let restaurant;
  // let token;

  // before
  before((done) => {
    Restaurant
    .create({
      first_name: 'Jim',
      last_name: 'Pestos',
      email: 'jpPizza@aol.com',
      password_digest: 'heyTina',
      restaurant_name: 'Jimmy Pesto',
      country: 'USA',
      postal: 11890,
      access: true
    })
    .then((restaurant_data) => {
      restaurant = restaurant_data;
      Menu
      .create({
        item: 'pizza slice',
        price: 3.99,
        restaurant_id: restaurant.id
      })
      .then((menu_data) => {
        menu = menu_data;
        done();
      });
    });
  });

  // end before
  it("POST /resturant/:restaurant_id/menu should return 201 and return nothing", (done) => {
    request(app)
    .post("/restaurant/1/menu")
    // .set("Authorization", token)
    .send({
      menu: {
        item: 'burrito',
        price: 4.99,
        restaurant_id: 1
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(201);
      done();
    });
  });

  it("PUT /resturant/:restaurant_id/menu/:id should return 200", (done) => {
    request(app)
    .put('/restaurant/1/menu/1')
    // .set("Authorization", token)
    .send({
      menu: {
        item: 'taco',
        price: 5.99,
        restaurant_id: 1
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      done();
    });
  });


  it("DELETE /resturant/:restaurant_id/menu/:id should return a 200 status code", (done) => {
    request(app)
    .delete('/restaurant/1/menu/1')
    // .set("Authorization", token)
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      done();
    })
  })
})
