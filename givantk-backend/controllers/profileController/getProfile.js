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
    .populate({
      path: 'services_asked_for',
      populate: { path: 'asker' }
    })
    .populate({
      path: 'services_helped_in',
      populate: { path: 'asker' }
    })
    .populate({
      path: 'services_bookmarked',
      populate: { path: 'asker' }
    })
    .populate({
      path: 'services_proposed_for',
      populate: { path: 'asker' }
    })
    .populate({
      path: 'services_archived',
      populate: { path: 'asker' }
    })
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
