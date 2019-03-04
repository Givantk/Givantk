const express = require('express');
const router = express.Router();
const passport = require('passport');

const pointsController = require('../controllers/pointsController/');

// @route  POST api/points
// @desc   Adding givantk points to users
// @access Private
// @errors noprofiles error
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  pointsController.addGivantkPoints,
);

module.exports = router;
