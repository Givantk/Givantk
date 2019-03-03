const express = require('express');
const router = express.Router();
const passport = require('passport');

const paymentController = require('../controllers/paymentController/');

// @route  POST api/payment
// @desc   Accepting payments from users
// @access Private
// @errors noprofiles error
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  paymentController.verifyPayment
);

module.exports = router;
