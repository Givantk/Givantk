const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');
const Profile = mongoose.model('profile');

module.exports = unbookmarkService = (req, res) => {
  const errors = {};

  Service.findById(req.params.id.toString())
    .then((service) => {
      Profile.findOne({ user: req.user._id.toString() }).then((profile) => {
        if (!profile) {
          errors.noprofile = 'No profile yet';
          return res.status(400).json(errors);
        }

        const newBookmarks = profile.services_bookmarked.filter(
          (item) => item != service._id
        );
        profile.services_bookmarked = newBookmarks;

        profile.save().then((profile) => {
          return res.json({ profile, success: true });
        });
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the service in database';
      res.status(500).json({ ...errors, ...err });
    });
};
