const Menu = require("../../models/menu");

let controller = {};

controller.index = (req, res) => {
  console.log('hits index');
  console.log('this is req.params', req.params);
    Menu
    .findAll(req.params.restaurant_id)
    .then((menus) => {
      console.log('returing menu items', menus)
      res.json(menus);
    })
    .catch((err) => {
      res
      .status(400)
      .json(err);
    });
}

controller.create = (req, res) => {
  console.log('req.params.restaurantid', req.params.restaurant_id);
  Menu
  .create(req.body.menu, req.params.restaurant_id)
  .then((menu) => {
      res
      .status(201)
      .json(menu);
  })
  .catch((err) => {
      res
      .status(400)
      .json(err);
  });
}

controller.update = (req, res) => {
    Menu
    .update(req.body.menu)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.destroy = (req, res) => {
    Menu
    .destroy()
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

module.exports = controller;
