const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = getUserById = (req, res) => {
  const errors = {};
  User.findById(req.params.id)
    .then((user) => {
      res.json({
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        location: user.location,
        success: true
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the user in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
