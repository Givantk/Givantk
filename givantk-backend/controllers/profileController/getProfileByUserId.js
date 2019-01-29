const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = getProfileById = (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'No profile';
        return res.status(404).json(errors);
      }

      return res.json({
        profile,
        success: true
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the profile in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
