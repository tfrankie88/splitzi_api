const db = require('../config/db');

let Menu ={};

Menu.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM restaurants
    WHERE id = $1
  `,[id]);
}

Menu.findAll = (restaurant_id) => {
  return db.many(`
    SELECT * FROM menus
    WHERE restaurant_id = $1
  `,[restaurant_id]);
}

Menu.create = (menu, restaurant_id) => {
  return db.one(`
    INSERT INTO menus
    (item,
    price,
    restaurant_id)
    VALUES ($1, $2, $3) RETURNING *
  `,[menu.item,
    menu.price,
    restaurant_id]);
}

Menu.update = (menu, id) => {
  return db.none(`
    UPDATE menus SET
    item = $1,
    price = $2
    WHERE id = $3
  `,[menu.item,
    menu.price,
    id]);
}

Menu.destroy = (id) => {
  return db.none(`
    DELETE FROM menus
    WHERE id = $1
  `, [id]);
}

module.exports = Menu;
