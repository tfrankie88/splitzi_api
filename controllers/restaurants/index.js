const express = require('express');
const router = express.Router();

const controller = require('./controller');
const auth = require("../../services/authentication");

router.post('/sign_up', controller.create);

router.post('/login', controller.processLogin);

router.get('/restrict', controller.restricted);

module.exports = router;
