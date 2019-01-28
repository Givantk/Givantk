const express = require('express');

const router = express.Router();
const passport = require('passport');

const serviceController = require('../controllers/serviceController/index.js');

// @route  GET api/service/all
// @desc   Get all services
// @access Public
// @errors noservices error
router.get('/all', serviceController.getAllServices);

// @route  POST api/service
// @desc   Create new service for logged in user
// @access Private
// @errors noprofile name description nature state asker start_time end_time error
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  serviceController.createService
);

// @route  GET api/service/:id
// @desc   Get service by ID
// @access Public
// @errors
router.get('/:id', serviceController.getServiceById);

// @route  PATCH api/service/:id
// @desc   Update a service made by a logged in user
// @access Private
// @errors unauthorized name description nature state asker start_time end_time error
router.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  serviceController.updateService
);

// @route  GET api/service/asked-for/:user_id
// @desc   Get services that a specific user asked for, by user id
// @access Public
// @errors noprofile error
router.get('/asked-for/:user_id', serviceController.getAskedForServices);

// @route  GET api/service/helped-in/:user_id
// @desc   Get services that a specific user helped in, by user id
// @access Public
// @errors noprofile error
router.get('/helped-in/:user_id', serviceController.getHelpedInServices);

module.exports = router;
