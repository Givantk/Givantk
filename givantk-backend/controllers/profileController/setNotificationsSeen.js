const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = setNotificationsSeen = (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user._id })
    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'You have no profile';
        return res.status(404).json(errors);
      }

      profile.notifications = profile.notifications.map((n) => {
        n.seen = true;
        return n;
      });

      profile
        .save()
        .then(() => {
          return res.json({
            success: true
          });
        })
        .catch(() => {
          errors.error = 'Error saving profile to database';
          res.status(500).json({ ...errors, ...err });
        });
    })
    .catch((err) => {
      errors.error = 'Error checking for the profile in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
