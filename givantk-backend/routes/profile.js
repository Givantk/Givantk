const express = require('express');
const aws = require('aws-sdk');

const multer = require('multer');
const multerS3 = require('multer-s3');
const router = express.Router();
const passport = require('passport');
const profileController = require('../controllers/profileController/index.js');
const keys = require('../config/keys.ignore');

//Setting profile photo storage
aws.config.update({
  secretAccessKey: keys.aws_secret_access_key,
  accessKeyId: keys.aws_access_key_id
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'givantk-profile-pictures',
    acl: 'public-read',
    key: function(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); //use Date.now() for unique file keys
    }
  }),
  limits: {
    fileSize: 1024 * 1024 * 5
  }
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
  profileController.makeProfile
);

// @route  GET api/profile
// @desc   Get profile of logged in user
// @access Private
// @errors noprofile error
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  profileController.getProfile
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
  profileController.setNotificationsSeen
);

module.exports = router;
