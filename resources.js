const express = require('express');
const router = express.Router();

router.use('/restaurant', require('./controllers/restaurants'));
router.use('/menu/:restaurant_id/menu', require('./controllers/menus'));

router.use('/taxes', require('./controllers/taxes'));

module.exports = router;
