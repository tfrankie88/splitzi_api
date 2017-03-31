const jwt = require('jsonwebtoken');

let AuthenticationService = {};

AuthenticationService.restrict = (req, res, next) => {
  if (req.headers['authorization']) {
    jwt.verify(req.headers['authorization'], myToken, (err, payload) => {
      if (!err) {
        req.restaurant = payload;
        next();
      } else {
        res
        .status(401)
        .json({error: 'Token is not valid'});
      }
    });
  } else {
    res
    .status(401)
    .json({error: 'Please provide an auth token'});
  }
}

module.exports = AuthenticationService;
