const Menu = require("../../models/menu");

let controller = {};

controller.create = (req, res) => {
  Menu
  .create(req.body.menu)
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
