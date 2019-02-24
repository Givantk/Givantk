const express = require('express');
const multer = require('multer');
const router = express.Router();
const passport = require('passport');
const profileController = require('../controllers/profileController/index.js');

//setting profile photo storage

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './assets/images/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

// @route  GET api/profile/all
// @desc   Get all profiles
// @access Public
// @errors noprofiles error
router.get('/all', profileController.getAllProfiles);

// @route  POST api/profile
// @desc   Create profile or update for logged in user
// @access Private
// @errors skills description date_of_birth error
router.post(
  '/',
  upload.single('avatar'),
  passport.authenticate('jwt', { session: false }),
  profileController.makeProfile,
);

// @route  GET api/profile
// @desc   Get profile of logged in user
// @access Private
// @errors noprofile error
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  profileController.getProfile,
);

// @route  GET api/profile/:user_id
// @desc   Get profile by user ID
// @access Public
// @errors
router.get('/:user_id', profileController.getProfileByUserId);

module.exports = router;

// @route  GET api/profile/set-notifications-seen
// @desc   Set the notifications of the logged in user to be seen
// @access Private
// @errors noprofile error
router.post(
  '/set-notifications-seen',
  passport.authenticate('jwt', { session: false }),
  profileController.setNotificationsSeen,
);

module.exports = router;
