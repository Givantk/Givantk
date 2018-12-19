const express = require('express');
const router = express.Router();

// including checkAuth middleware
const checkAuth = require('../middleware/check-auth');

//including UsersController
const UsersController = require('../controllers/UsersController');


// get all users using GET request
router.get('/', UsersController.getAllUsers);


// create user using POST request or signup
router.post('/', UsersController.setUser);

// login
router.post('/login', UsersController.login); 

// get one user using GET request
router.get('/:id', UsersController.getUser);


// update user using PATCH request (protected by jwt)
router.patch('/:id', checkAuth, UsersController.UpdateUser);


// delete user using DELETE request
router.delete('/:id', checkAuth, UsersController.deleteUser);

module.exports = router; 