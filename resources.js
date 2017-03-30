const express = require('express');
const router = express.Router();

router.use('/restaurant', require('./controllers/restaurants'));
router.use('/restaurant/:restaurant_id/menu', require('./controllers/menus'));

module.exports = router;
