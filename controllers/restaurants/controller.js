bcrypt = require('bcrypt');
jwt = require('jsonwebtoken');

const Restaurant = require('../../models/restaurant');

let controller = {};

controller.create = (req,res) => {
  Restaurant
  .create(req.body.restaurant)
  .then((restaurant) => {
    res.json(restaurant)
  })
  .catch((err) => {
    res.status(400)
    .json(err);
  })
}


module.exports = controller;
