const bcrypt = require('bcrypt');
const db = require('../config/db');

let Restaurant ={}

Restaurant.create = (restaurant) => {
  // restaurant.password_digest = bcrypt.hashSync(restaurant.password, 10);
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
    restaurant.password_digest,
    restaurant.restaurant_name,
    restaurant.country,
    restaurant.postal,
    true]);
}
//
// Restaurant.findByEmail = (email) => {
//   return db.one(`
//     SELECT * FROM restaurants
//     WHERE email = $1;`,
//     [email]
//   );
// };

module.exports = Restaurant;
