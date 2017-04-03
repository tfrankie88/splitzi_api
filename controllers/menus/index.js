const express = require('express');
const router = express.Router({mergeParams: true});

const controller = require('./controller');
const auth = require('../../services/authentication');

router.get('/', controller.index);

// router.post('/', controller.create);
router.post('/', controller.create);

// router.put('/:id', controller.update);
router.put('/:id', auth.restrict, controller.update);

// router.delete('/:id', controller.destroy);
router.delete('/:id', auth.restrict, controller.destroy);

module.exports = router;
