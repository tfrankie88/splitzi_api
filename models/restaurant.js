const bcrypt = require('bcrypt');
const db = require('../config/db');

let Restaurant ={}

Restaurant.create = (restaurant) => {
  console.log(restaurant);
  restaurant.password = bcrypt.hashSync(restaurant.password, 10);
  return db.one(`
    INSERT INTO restaurants
    (first_name,
    last_name,
    email,
    password,
    restaurant_name,
    country,
    postal,
    access)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `,[restaurant.first_name,
    restaurant.last_name,
    restaurant.email,
    restaurant.password,
    restaurant.restaurant_name,
    restaurant.country,
    restaurant.postal,
    false]);
}

module.exports = Restaurant;
