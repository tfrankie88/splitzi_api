const express = require('express');
const router = express.Router();

router.use('/restaurant', require('./controllers/restaurants'));


module.exports = router;
