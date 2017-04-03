bcrypt = require('bcrypt');
jwt = require('jsonwebtoken');

myToken = process.env.myToken

const Restaurant = require('../../models/restaurant');

let controller = {};

controller.show = (req, res) => {
  console.log('got to show');
  Restaurant
  .findById(req.params.id)
  .then((restaurant) => {
    console.log('got to find with req.params.id', req.params.id);
    res.json(restaurant);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}

controller.create = (req, res) => {
  console.log('req.body', req.body)
  Restaurant
  .create(req.body.restaurant)
  .then((restaurant) => {
    res.status(201)
    res.json(restaurant)
  })
  .catch((err) => {
    res.status(400)
    .json(err);
  })
}

controller.processLogin = (req, res) => {
  console.log('we are in process login')
  Restaurant
  .findByEmail(req.body.restaurant.email)
  .then((restaurant) =>{
    if (restaurant) {
      console.log('restaurant exists')
      const isAuthed = bcrypt.compareSync(req.body.restaurant.password, restaurant.password);
      if (isAuthed) {

        console.log('isAuthed is true', isAuthed);
        const token = jwt.sign({email: restaurant.email}, myToken, {
          expiresIn: "7d"
        });
        res.json({
          token: token,
          restaurant: restaurant
          // restaurant_name: restaurant.restaurant_name,
          // id: restaurant.id
        })
        console.log(token);
        console.log(restaurant);
      } else {
        console.log('is Authed is false')
      }
    } else {
      console.log('restaurant does not exist')
    }
  })
};

  controller.restricted = (req, res) => {
  jwt.verify(req.headers.authorization, myToken, (err, decoded) => {
    if (err) {
      res.
      status(401)
      .json({error: err.message});
    } else {
      res.json({message: 'access denied'});
    }
  })
};


module.exports = controller;
