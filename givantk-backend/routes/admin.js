const express = require('express');
const passport = require('passport');

const router = express.Router();

const adminController = require('../controllers/adminController/index.js');

// @route  POST api/admin/login
// @desc   User Login - Return jwt token
// @access Public
// @errors incorrectinfo error
// @params
// @body   email password
router.post('/login', adminController.loginAdmin);

module.exports = router;
