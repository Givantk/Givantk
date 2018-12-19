const express = require('express');
const router = express.Router();

// including checkAuth middleware
const checkAuth = require('../middleware/check-auth');

//including ServicesController
const ServicesController = require('../controllers/ServicesController');

// get all services using GET request
router.get('/', ServicesController.getAllServices);


// create service using POST request
router.post('/', checkAuth, ServicesController.setService);


// get one service using GET request
router.get('/:id', ServicesController.getService);


// update service using PATCH request
router.patch('/:id', checkAuth, ServicesController.UpdateService);


module.exports = router; 