const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = (req, res) => {
  const errors = {};

  const { token } = req.body;

  User.findById(req.user._id)
    .then((user) => {
      user.pushNotificationToken = token;
      user.save().then(() => {
        res.json(user);
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the user in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
