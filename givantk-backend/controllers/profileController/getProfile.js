const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = getProfile = (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user._id })
    .populate('notifications.user_associated')
    .populate('notifications.user_profile_associated')
    .populate({
      path: 'notifications.navigateTo.service',
      populate: { path: 'asker' }
    })
    .populate('notifications.navigateTo.profile')
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'You have no profile';
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
