const mongoose = require('mongoose');

// Models
const User = mongoose.model('user');
const Profile = mongoose.model('profile');

module.exports = deleteUser = (req, res) => {
  const errors = {};

  User.findByIdAndRemove(req.user._id)
    .then(() => {
      Profile.findOne({ user: req.user._id }).then((profile) => {
        if (profile) {
          profile.remove();
        }
      });
      return res.json({ success: true });
    })
    .catch((err) => {
      errors.error = 'Error checking for the user in database';
      return res.status(500).json({ ...errors, ...err });
    });
};
