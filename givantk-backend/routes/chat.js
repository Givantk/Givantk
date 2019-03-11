const express = require('express');
const router = express.Router();
const passport = require('passport');

const ChatController = require('../controllers/chatController/index');

// @route  POST api/chat/userId
// @desc   Load all chats of a user
// @access Private
// @errors noprofiles error
router.post(
  '/user/:userId',
  passport.authenticate('jwt', { session: false }),
  ChatController.loadUserChats
);

router.post(
  '/socket/:socketId',
  passport.authenticate('jwt', { session: false }),
  ChatController.loadPrivateChat
);

module.exports = router;
