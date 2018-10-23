const express = require('express');
const router = express.Router();

//including ServicesController
const ServicesController = require('../controllers/ServicesController');

// get all services using GET request
router.get('/', ServicesController.getAllServices);


// create service using POST request
router.post('/', ServicesController.setService);


// get one service using GET request
router.get('/:id', ServicesController.getService);


// update service using PATCH request
router.patch('/:id', ServicesController.UpdateService);


module.exports = router; 