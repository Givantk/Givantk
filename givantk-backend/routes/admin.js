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

module.exports = router;

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzUwNDBjZWU2MGFmMTMyNzQyMGUyNDMiLCJmaXJzdF9uYW1lIjoiQWJkbyIsImxhc3RfbmFtZSI6IkZhd2F6IiwiZW1haWwiOiJxQHEuY29tIiwibG9jYXRpb24iOiJTaGFyYWJleWEiLCJpYXQiOjE1NTA4MjMyNzN9.7Soboabhxe2WGlDD4iMqkAbCmrh2c8JlIEl-9xdpR3A
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1NTA4MjM3NDEsImV4cCI6MTU1MTQyODU0MX0.MhX5dKGdTKD9JnWzEaHRawteqEpIvTXcmv4kzIX2QY8
