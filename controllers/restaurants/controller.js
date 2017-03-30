bcrypt = require('bcrypt');
jwt = require('jsonwebtoken');

const Restaurant = require('../../models/restaurant');

let controller = {};

controller.create = (req,res) => {
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
  Restaurant
  .findByEmail(req.body.email)
  .then((restaurant) =>{
    if (restaurant) {
      const isAuthed = bcrypt.compareSync(req.body.password, user.password_digest);
      if (isAuthed) {
        console.log('isAuthed is true', isAuthed);
        const authRestaurant = {
          first_name: restaurant.first_name,
          restaurant_name: restaurant.restaurant_name,
          email: restaurant.email,
          country: restaurant.country,
          postal: restaurant.postal
        }
        const token = jwt.sign({email: req.body.email}, "Bringo", {
            expiresIn: "1y"
        });
        res.json({
          token: token,
          user: authRestaurant
        });
        // console.log(authRestaurant)
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
