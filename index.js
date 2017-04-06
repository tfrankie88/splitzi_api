const express = require('express');
const app = express();
// var jwt = require('express-jwt');

const cors = require('cors');
app.use(cors());
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.send('hello world');
// })

// app.use(jwt({ secret: 'keyboard cat'}).unless({path: ['/restaurant/sign_up']}));


app.use(require('./resources'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server listening on', PORT)
});

module.exports = app;
