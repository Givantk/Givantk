const express = require('express');
const router = express.Router();
const passport = require('passport');

const ChatController = require('../controllers/chatController/index');

// @route  POST api/profile/id1+id2
// @desc   Open chat between 2 users
// @access Private
// @errors noprofiles error
router.post(
  '/:id1+:id2',
  passport.authenticate('jwt', { session: false }),
  ChatController.openChat
);
