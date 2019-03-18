const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = getProfileById = (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.params.user_id })
    .populate({
      path: 'services_asked_for',
      populate: { path: 'asker' },
    })
    .populate({
      path: 'services_asked_for',
      populate: { path: 'helper' },
    })
    .populate({
      path: 'services_helped_in',
      populate: { path: 'asker' },
    })
    .populate({
      path: 'services_helped_in',
      populate: { path: 'helper' },
    })
    .populate({
      path: 'services_bookmarked',
      populate: { path: 'asker' },
    })
    .populate({
      path: 'services_proposed_for',
      populate: { path: 'asker' },
    })
    .populate({
      path: 'services_archived',
      populate: { path: 'asker' },
    })
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'No profile';
        return res.status(404).json(errors);
      }

      return res.json({
        profile,
        success: true,
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the profile in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
