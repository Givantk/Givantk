const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

// Validations
const validateUser = require('../../validations/user');

module.exports = updateUser = (req, res) => {
  // Validate
  const { errors, isValid } = validateUser(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newUserInfo = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    location: req.body.location
  };

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUserInfo.password, salt, (err, hash) => {
      if (err) throw err;
      newUserInfo.password = hash;

      User.findByIdAndUpdate(
        { _id: req.user._id.toString() },
        { $set: newUserInfo },
        { new: true }
      )
        .then((user) => res.json(user))
        .catch((err) => {
          errors.error = 'Error checking for the user in the database';
          res.status(500).json({ ...errors, ...err });
        });
    });
  });
};
