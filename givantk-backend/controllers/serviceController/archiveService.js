const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = archiveService = (req, res) => {
  const errors = {};

  const serviceId = req.params.service_id;

  Service.findById(serviceId)
    .then((service) => {
      if (service.asker.toString() !== req.user._id.toString()) {
        errors.unauthorized = "You haven't initiated this service";
        return res.status(401).json(errors);
      }

      if (service.helper) {
        errors.alreadyhashelper =
          "This service has a helper, it can't be archived";
        return res.status(400).json(errors);
      }

      Profile.findOne({ user: service.asker.toString() }).then(
        (askerProfile) => {
          // Updating user profile
          askerProfile.services_archived.unshift(service._id);
          service.nature === 'free'
            ? (askerProfile.givantk_points += service.givantk_points)
            : (askerProfile.money_points += service.money_points);

          askerProfile.save();
        },
      );

      // Updating service
      service.state = 'archived';
      service.save().then(() => {
        return res.json({ service, success: true });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      return res.status(500).json({ ...errors, ...err });
    });
};
