const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = markServiceAsDone = (req, res) => {
  const errors = {};

  const serviceId = req.params.service_id;

  Service.findById(serviceId)
    .then((service) => {
      if (service.asker.toString() !== req.user._id.toString()) {
        errors.unauthorized = "You haven't initiated this service";
        return res.status(401).json(errors);
      }

      if (!service.helper) {
        errors.nohelper =
          "This service has no helper, it can't be marked as done";
        return res.status(400).json(errors);
      }

      Profile.findOne({ user: service.asker.toString() }).then(
        (askerProfile) => {
          Profile.findOne({ user: service.helper.toString() }).then(
            (helperProfile) => {
              // Updating asker profile
              askerProfile.services_asked_for_finished.unshift(service._id);
              askerProfile.save();

              // Updating helper profile
              helperProfile.services_helped_in_finished.unshift(service._id);
              helperProfile.notifications.unshift({
                title: `${askerProfile.first_name} marked the service \"${
                  service.name
                }\" as done`,
                navigateTo: {
                  kind: 'service',
                  service: service._id
                },
                is_user_associated: true,
                user_associated: askerProfile.user,
                user_profile_associated: askerProfile._id
              });

              helperProfile.save();
            }
          );
        }
      );

      // Updating service
      service.state = 'done';
      service.save().then(() => {
        return res.json({ service, success: true });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      return res.status(500).json({ ...errors, ...err });
    });
};