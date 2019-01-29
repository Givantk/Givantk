const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = getAllProfiles = (req, res) => {
  const errors = {};
  Profile.find()
    .then((profiles) => {
      if (profiles.length === 0) {
        errors.noprofiles = 'No profiles found';
        return res.status(404).json(errors);
      }
      return res.json(profiles);
    })
    .catch((err) => {
      errors.error = 'Error fetching profiles from database';
      res.status(500).json({ ...errors, ...err });
    });
};
