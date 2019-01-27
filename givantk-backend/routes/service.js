const express = require('express');
const router = express.Router();

//including ServicesController
const serviceController = require('../controllers/serviceController');

// get all services using GET request
router.get('/', serviceController.getAllServices);

// create service using POST request
router.post('/', serviceController.setService);

// get one service using GET request
router.get('/:id', serviceController.getService);

// update service using PATCH request
router.patch('/:id', serviceController.UpdateService);

module.exports = router;
