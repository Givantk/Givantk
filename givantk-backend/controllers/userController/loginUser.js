const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const keys = require('../../config/keys.ignore');

// Models
const User = mongoose.model('user');

// Validations
const validateLoginUser = require('../../validations/loginUser');

module.exports = loginUser = (req, res) => {
  // Validate
  const { errors, isValid } = validateLoginUser(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Check for the user email
  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.incorrectinfo = 'Incorrect email or password';
      return res.status(400).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) {
        errors.incorrectinfo = 'Incorrect email or password';
        return res.status(400).json(errors);
      }

      // User Matched

      // JWT Payload
      const TokenPayload = {
        _id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        location: user.location
      };

      // Make JWT
      jwt.sign(
        TokenPayload,
        keys.secretOrKey,
        // { expiresIn: 604800 },
        (err, token) => {
          return res.json({ success: true, token: 'Bearer ' + token });
        }
      );
    });
  });
};
