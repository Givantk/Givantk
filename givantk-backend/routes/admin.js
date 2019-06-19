const express = require('express');
const passport = require('passport');

const router = express.Router();

const adminController = require('../controllers/adminController/index.js');

// @route  POST api/admin/login
// @desc   Admin Login - Return jwt token
// @access Public
// @errors incorrectinfo
// @params
// @body   email password
router.post('/login', adminController.loginAdmin);

// @route  GET api/admin/personal-info
// @desc   Get users personal info
// @access Private
// @errors unauthorized error
// @params
// @body
router.get(
  '/personal-info',
  // passport.authenticate('jwt', { session: false }),
  adminController.personalInfo
);

// @route  GET api/admin/user-services
// @desc   Get users with their associated services numbers
// @access Private
// @errors unauthorized error
// @params
// @body
router.get(
  '/user-services',
  passport.authenticate('jwt', { session: false }),
  adminController.userServices
);

// @route  GET api/admin/services-helped-in
// @desc   Get users with the info of the services which they helped in
// @access Private
// @errors unauthorized error
// @params
// @body
router.get(
  '/services-helped-in',
  passport.authenticate('jwt', { session: false }),
  adminController.servicesHelpedIn
);

// @route  GET api/admin/services-asked-for
// @desc   Get users with the info of the services which they asked for
// @access Private
// @errors unauthorized error
// @params
// @body
router.get(
  '/services-asked-for',
  passport.authenticate('jwt', { session: false }),
  adminController.servicesAskedFor
);

// @route  GET api/admin/services-info
// @desc   Get services info
// @access Private
// @errors unauthorized error
// @params
// @body
router.get(
  '/services-info',
  passport.authenticate('jwt', { session: false }),
  adminController.servicesInfo
);

// @route  GET api/admin/services-info
// @desc   Get services info
// @access Private
// @errors unauthorized error
// @params
// @body
router.get(
  '/services-info',
  passport.authenticate('jwt', { session: false }),
  adminController.servicesInfo
);

// @route  POST api/admin/announcement
// @desc   Post a new announcement
// @access Private
// @errors unauthorized invalid error
// @params
// @body   title, content
router.post(
  '/announcement',
  passport.authenticate('jwt', { session: false }),
  adminController.createAnnouncement
);

module.exports = router;
