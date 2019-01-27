const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

// get one user using GET request
exports.getUser = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .populate('Service')
    .then((result) => res.json(result));
};
