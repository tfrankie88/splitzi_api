const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/:country/:postal', controller.index);

module.exports = router;
