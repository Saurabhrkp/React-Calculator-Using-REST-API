const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');

router.post(
  '/add',
  indexController.authentication,
  indexController.checkForValueInBody,
  indexController.addition
);

router.post(
  '/subtract',
  indexController.authentication,
  indexController.checkForValueInBody,
  indexController.subtraction
);

router.post(
  '/multiply',
  indexController.authentication,
  indexController.checkForValueInBody,
  indexController.multiplication
);

router.post(
  '/divide',
  indexController.authentication,
  indexController.checkForValueInBody,
  indexController.division
);

router.post(
  '/history',
  indexController.authentication,
  indexController.history
);

router.post(
  '/deleteByID',
  indexController.authentication,
  indexController.deleteById
);

router.post(
  '/clearHistory',
  indexController.authentication,
  indexController.clearAllHistory
);

module.exports = router;
