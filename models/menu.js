const db = require('../config/db');

let Menu ={};

Menu.create = (menu, id) => {
  return db.one(`
    INSERT INTO menus
    (item,
    price,
    restaurant_id)
    VALUES ($1, $2, $3) RETURNING *
  `,[menu.item,
    menu.price,
    menu.restaurant_id]);
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