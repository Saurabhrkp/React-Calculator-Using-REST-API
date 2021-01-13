const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get('/add', indexController.addition);

router.get('/subtract', indexController.subtraction);

router.get('/multiply', indexController.multiplication);

router.get('/divide', indexController.division);

router.get('/history', indexController.history);

module.exports = router;
