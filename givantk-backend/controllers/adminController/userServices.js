const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = userServices = (req, res) => {
  const errors = {};

  if (req.user !== 'admin') {
    errors.unauthorized = 'Unauthorized';
    return res.status(401).json(errors);
  }

  const userServicesArray = [];

  Profile.find()
    .sort({ date: -1 })
    .populate('user')
    .then((profiles) => {
      profiles.forEach((profile) => {
        userServicesArray.unshift({
          id: profile.user._id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          services_asked_for: profile.services_asked_for.length,
          services_helped_in: profile.services_helped_in.length,
          services_proposed_for: profile.services_proposed_for.length,
          services_asked_for_finished:
            profile.services_asked_for_finished.length,
          services_helped_in_finished:
            profile.services_helped_in_finished.length
        });
      });

      return res.json(userServicesArray);
    })
    .catch((err) => {
      errors.error = 'Error fetching users from database';
      res.status(500).json({ ...errors, ...err });
    });
};
