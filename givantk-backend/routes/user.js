const express = require('express');
const router = express.Router();

//Error types:
// 200 :good request
// 400: bad request
// 401: unauthorized
// 404: not found
// 500: server error

const userController = require('../controllers/userController/index.js');

// @route  GET api/user/all
// @desc   Get all users
// @access Public
// @errors first_name last_name email password password2 location error
router.get('/all', userController.getAllUsers);

// @route  POST api/user/signup
// @desc   User Signup
// @access Public
// @errors userexists error
router.post('/signup', userController.signupUser);

// // @route  POST api/user/login
// // @desc   User Login / Return jwt token
// // @access Public
// // @errors
// router.post('/login', userController.login);

// // get one user using GET request
// router.get('/:id', userController.getUser);

// // update user using PATCH request (protected by jwt)
// router.patch('/:id', userController.UpdateUser);

// // delete user using DELETE request
// router.delete('/:id', userController.deleteUser);

module.exports = router;
