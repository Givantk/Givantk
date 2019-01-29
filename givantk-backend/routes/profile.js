const express = require('express');
const router = express.Router();
const passport = require('passport');

const profileController = require('../controllers/profileController/index.js');

// @route  GET api/profile/all
// @desc   Get all profiles
// @access Public
// @errors noprofiles error
router.get('/all', profileController.getAllProfiles);

// @route  POST api/profile
// @desc   Create profile for logged in user
// @access Private
// @errors
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  profileController.createProfile
);

// // @route  PATCH api/profile
// // @desc   Update profile of the logged in user
// // @access Private
// // @errors
// router.patch(
//   '/',
//   passport.authenticate('jwt', { session: false }),
//   profileController.updateProfile
// );

// // @route  GET api/profile/:user_id
// // @desc   Get profile by user ID
// // @access Public
// // @errors
// router.get('/:user_id', profileController.getProfileByUserId);

module.exports = router;
