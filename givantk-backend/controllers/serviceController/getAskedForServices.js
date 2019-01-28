const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = getAskedForServices = (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'No profile yet';
        return res.status(400).json(errors);
      }

      return res.json({ services: profile.services_asked_for, success: true });
    })
    .catch((err) => {
      errors.error = 'Error getting services';
      res.status(500).json({ ...errors, ...err });
    });
};
