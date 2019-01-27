const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/userController/index.js');

//Error types:
// 200 :good request
// 400: bad request
// 401: unauthorized
// 404: not found
// 500: server error

// @route  GET api/user/all
// @desc   Get all users
// @access Public
// @errors nousers error
router.get('/all', userController.getAllUsers);

// @route  POST api/user
// @desc   User Signup - Create new user
// @access Public
// @errors first_name last_name email password password2 location error
router.post('/', userController.signupUser);

// @route  POST api/user/login
// @desc   User Login - Return jwt token
// @access Public
// @errors incorrectinfo email password error
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
// @errors
router.delete(
  '/',
  passport.authenticate('jwt', { session: false }),
  userController.deleteUser
);

// // get one user using GET request
// router.get('/:id', userController.getUser);

module.exports = router;
