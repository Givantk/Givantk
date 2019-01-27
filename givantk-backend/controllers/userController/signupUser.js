const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

// Validations
const validateSignupUser = require('../../validations/signupUser');

module.exports = signupUser = (req, res) => {
  // Validate
  const { errors, isValid } = validateSignupUser(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check if there is a user with the same email
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        errors.email = 'Email already exists';
        return res.status(400).json(errors);
      }

      // Create new user
      const newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location
      })
        .save()
        .then((user) => res.json(user))
        .catch((err) => {
          errors.error = 'Error saving user to database';
          res.status(500).json({ ...errors, ...err });
        });
    })
    .catch((err) => {
      errors.error = 'Error checking for the user in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
