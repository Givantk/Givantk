const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');

module.exports = getAllUsers = (req, res) => {
  const errors = {};
  User.find()
    .then((users) => {
      if (users.length === 0) {
        errors.nousers = 'No users found';
        return res.status(404).json(errors);
      }
      users = users.map((user) => {
        user.password = null;
        return user;
      });
      return res.json(users);
    })
    .catch((err) => {
      errors.error = 'Error fetching users from database';
      res.status(500).json({ ...errors, ...err });
    });
};
