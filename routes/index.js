const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.get(
  '/add',
  indexController.authentication,
  indexController.checkForValueInQuery,
  indexController.addition
);

router.get(
  '/subtract',
  indexController.authentication,
  indexController.checkForValueInQuery,
  indexController.subtraction
);

router.get(
  '/multiply',
  indexController.authentication,
  indexController.checkForValueInQuery,
  indexController.multiplication
);

router.get(
  '/divide',
  indexController.authentication,
  indexController.checkForValueInQuery,
  indexController.division
);

router.get('/history', indexController.authentication, indexController.history);

module.exports = router;
