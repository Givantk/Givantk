const express = require('express');
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

// @route  POST api/user/signup
// @desc   User Signup
// @access Public
// @errors first_name last_name email password password2 location error
router.post('/signup', userController.signupUser);

// @route  POST api/user/login
// @desc   User Login / Return jwt token
// @access Public
// @errors incorrectinfo email password error
router.post('/login', userController.loginUser);

// // get one user using GET request
// router.get('/:id', userController.getUser);

// // update user using PATCH request (protected by jwt)
// router.patch('/:id', userController.UpdateUser);

// // delete user using DELETE request
// router.delete('/:id', userController.deleteUser);

module.exports = router;
