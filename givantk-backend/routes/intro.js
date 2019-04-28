const express = require('express');
const router = express.Router();
const passport = require('passport');

const introController = require('../controllers/introController/');

// @route  POST api/payment
// @desc   Accepting payments from users
// @access Private
// @errors noprofiles error
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  introController.paasIntro
);

module.exports = router;
