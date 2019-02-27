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

// @route  DELETE api/service/:id
// @desc   Delete a service made by a logged in user
// @access Private
// @errors unauthorized error
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  serviceController.deleteService
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

// @route  GET api/service/bookmark/:id
// @desc   Bookmark a service for the logged in user, by service id
// @access Private
// @errors noprofile alreadybookmarked error
router.get(
  '/bookmark/:id',
  passport.authenticate('jwt', { session: false }),
  serviceController.bookmarkService
);

// @route  GET api/service/unbookmark/:id
// @desc   Unbookmark a service for the logged in user, by service id
// @access Private
// @errors noprofile notbookmarked error
router.get(
  '/unbookmark/:id',
  passport.authenticate('jwt', { session: false }),
  serviceController.unbookmarkService
);

// @route  POST api/service/propose/:id
// @desc   Propose to a service, by service id
// @access Private
// @errors unauthorized alreadyproposed noprofile error
router.post(
  '/propose/:id',
  passport.authenticate('jwt', { session: false }),
  serviceController.proposeToService
);

// @route  GET api/service/unpropose/:id
// @desc   Unpropose to a service, by service id
// @access Private
// @errors unauthorized notproposed noprofile error
router.get(
  '/unpropose/:id',
  passport.authenticate('jwt', { session: false }),
  serviceController.unproposeToService
);

// @route  POST api/service/accept-service-proposal/:service_id/:proposal_id
// @desc   Accept a proposal
// @access Private
// @errors unauthorized noproposal alreadyhashelper error
router.post(
  '/accept-service-proposal/:service_id/:proposal_id',
  passport.authenticate('jwt', { session: false }),
  serviceController.acceptServiceProposal
);

// @route  POST api/service/mark-as-done/:service_id
// @desc   Mark a service as done, if it has a helper
// @access Private
// @errors unauthorized nohelper error
router.post(
  '/mark-as-done/:service_id',
  passport.authenticate('jwt', { session: false }),
  serviceController.markServiceAsDone
);

// @route  GET api/service/search/:name
// @desc   Search for services
// @access Private
// @errors noservice error
router.get(
  '/search/:name',
  passport.authenticate('jwt', { session: false }),
  serviceController.search
);

module.exports = router;
