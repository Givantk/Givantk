const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = getUserById = (req, res) => {
  const errors = {};
  User.findById(req.params.id)
    .then((user) => {
      user.password = null;
      res.json({
        user,
        success: true
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the user in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
