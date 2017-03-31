const AvalaraTax = require('../../services/taxes');

const controller = {};

controller.index = (req, res) => {
  console.log('hello')
  AvalaraTax.search(req.params.country, req.params.postal)
  .then(r=>r.json())
  .then((data) => {
    res
    .sendStatus(200)
    .json(data);
  })
  .catch(err => console.log(err));
}

module.exports = controller;
