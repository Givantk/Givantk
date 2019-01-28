const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = proposeToService = (req, res) => {
  const errors = {};

  Service.findById(req.params.id)
    .then((service) => {
      service.applicants.unshift(req.user._id);

      if (service.asker.toString() === req.user._id.toString()) {
        errors.unauthorized = "You can't propose to your own service";
        res.status(401).json(errors);
      }

      Profile.findOne({ user: req.user._id }).then((profile) => {
        if (!profile) {
          errors.noprofile = 'No profile yet';
          return res.status(400).json(errors);
        }

        profile.services_proposed_for.unshift(service._id);

        service.save().then((service) => {
          profile.save();
          return res.json({ service, success: true });
        });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      res.status(500).json({ ...errors, ...err });
    });
};
