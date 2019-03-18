const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/userController/index.js');

// @route  GET api/user/all
// @desc   Get all users
// @access Public
// @errors nousers error
router.get('/all', userController.getAllUsers);

// @route  POST api/user
// @desc   User Signup - Create new user
// @access Public
// @errors first_name last_name email password password2 location error
// @body   isFacebookEntry(optional) facebookId(optional)
router.post('/', userController.signupUser);

// @route  POST api/user/login
// @desc   User Login - Return jwt token
// @access Public
// @errors incorrectinfo email password error
// @body   isFacebookEntry(optional) facebookId(optional)
router.post('/login', userController.loginUser);

// @route  PATCH api/user
// @desc   Update logged in user
// @access Private
// @errors first_name last_name email password password2 location error
router.patch(
  '/',
  passport.authenticate('jwt', { session: false }),
  userController.updateUser
);

// @route  DELETE api/user
// @desc   Delete logged in user
// @access Private
// @errors error
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  userController.deleteUser
);

// @route  GET api/user
// @desc   Get logged in user
// @access Private
// @errors error
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  userController.getUser
);

// @route  GET api/user/:id
// @desc   Get user by ID
// @access Public
// @errors
router.get('/:id', userController.getUserById);

// @route  POST api/user/set-push-token
// @desc   Set the push token for the current user
// @access Private
// @errors error
// @body   token
router.post(
  '/set-push-token',
  passport.authenticate('jwt', { session: false }),
  userController.setUserNotificationToken
);

// @route  POST api/user/remove-push-token
// @desc   Remove the push token for the current user (usually when logging out)
// @access Private
// @errors error
router.post(
  '/remove-push-token',
  passport.authenticate('jwt', { session: false }),
  userController.removePushNotificationToken
);

module.exports = router;
