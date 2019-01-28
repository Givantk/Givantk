const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = unproposeToService = (req, res) => {
  const errors = {};

  Service.findById(req.params.id)
    .then((service) => {
      const newApplicants = service.applicants.filter(
        (item) => item.toString() !== req.user._id.toString()
      );
      service.applicants = newApplicants;

      if (service.asker.toString() === req.user._id.toString()) {
        errors.unauthorized = "You can't propose to your own service";
        res.status(401).json(errors);
      }

      Profile.findOne({ user: req.user._id }).then((profile) => {
        if (!profile) {
          errors.noprofile = 'No profile yet';
          return res.status(400).json(errors);
        }

        const newServices = profile.services_proposed_for.filter(
          (item) => item.toString() !== service._id.toString()
        );
        profile.services_proposed_for = newServices;

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
