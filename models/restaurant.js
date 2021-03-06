const bcrypt = require('bcrypt');
const db = require('../config/db');

let Restaurant ={}

Restaurant.create = (restaurant) => {
  console.log('restaurant in models: ', restaurant)
  password_digest = bcrypt.hashSync(restaurant.password_digest, 10);
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
    password_digest,
    restaurant.restaurant_name,
    restaurant.country,
    restaurant.postal,
    true]);
}
//
Restaurant.findByEmail = (email) => {
  return db.one(`
    SELECT * FROM restaurants
    WHERE email = $1;
  `,[email]);
};

Restaurant.findByName = (name) => {
  return db.one(`
    SELECT * FROM
    restaurants WHERE
    restaurant_name = $1
  `,[name]);
}

module.exports = Restaurant;
