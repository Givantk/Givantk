const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

// Validations
const validateUser = require('../../validations/user');

module.exports = signupUser = (req, res) => {
  const { isFacebookEntry, facebookId } = req.body;

  if (isFacebookEntry) {
    const errors = {};
    User.findOne({ 'login_credentials.facebook.id': facebookId })
      .then((user) => {
        console.log(user);
        if (user) {
          return res.json({
            user,
            success: true
          });
        } else {
          const newUser = new User({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            avatar: req.body.avatar,
            login_credentials: {
              facebook: { id: facebookId, has_password: false }
            }
          });
          newUser
            .save()
            .then((user) => {
              return res.json({
                user,
                success: true
              });
            })
            .catch((err) => {
              errors.error = 'Error saving user to database';
              return res.status(500).json({ ...errors, ...err });
            });
        }
      })
      .catch((err) => {
        errors.error = 'Error checking for the user in the database';
        return res.status(500).json({ ...errors, ...err });
      });

    return;
  }

  // Validate
  let { errors, isValid } = validateUser(req.body);

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
        location: req.body.location,
        avatar: req.body.avatar
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              user.password = null;
              res.json({
                user,
                success: true
              });
            })
            .catch((err) => {
              errors.error = 'Error saving user to database';
              res.status(500).json({ ...errors, ...err });
            });
        });
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the user in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
