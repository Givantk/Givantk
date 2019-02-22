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
  passport.authenticate('jwt', { session: false }),
  adminController.personalInfo
);

// @route  GET api/admin/user-services
// @desc   Get users with their services info
// @access Private
// @errors unauthorized error
// @params
// @body
router.get(
  '/user-services',
  passport.authenticate('jwt', { session: false }),
  adminController.userServices
);

module.exports = router;
