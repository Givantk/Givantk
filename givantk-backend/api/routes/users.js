const express = require('express');
const router = express.Router();


//including UsersController
const UsersController = require('../controllers/UsersController');

// get all users using GET request
router.get('/', UsersController.getAllUsers);


// create user using POST request
router.post('/', UsersController.setUser);


// get one user using GET request
router.get('/:id', UsersController.getUser);


// update user using PATCH request
router.patch('/:id', UsersController.UpdateUser);


module.exports = router; 