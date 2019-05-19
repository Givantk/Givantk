const mongoose = require('mongoose');

const sendNotifications = require('../../assets/utils/sendNotifications');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = proposeToService = (req, res) => {
  const errors = {};

  const serviceId = req.params.service_id;
  const proposalId = req.params.proposal_id;

  Service.findById(serviceId)
    .then((service) => {
      if (service.asker.toString() !== req.user._id.toString()) {
        errors.unauthorized = "You haven't initiated this service";
        return res.status(401).json(errors);
      }

      if (service.state !== 'new' || service.state !== 'pending') {
        errors.unauthorized = "You can't accept proposal due to service state";
        return res.status(401).json(errors);
      }

      const application = service.applications.find(
        (item) => item._id.toString() === proposalId
      );

      if (!application) {
        errors.noproposal = 'Proposal not found';
        return res.status(404).json(errors);
      }

      if (service.helper) {
        errors.alreadyhashelper = 'This service already has a helper';
        return res.status(400).json(errors);
      }

      Profile.findOne({ user: application.user._id.toString() })
        .populate('user')
        .then((applicantProfile) => {
          // Updating service
          const proposalIndex = service.applications.findIndex(
            (item) => item._id.toString() === proposalId
          );
          service.applications = service.applications.map((ap, i) => {
            if (i === proposalIndex) ap.chosen = true;
            else ap.chosen = false;
            return ap;
          });
          service.state = 'progressing';
          service.helper = applicantProfile.user;

          // Updating applicant profile
          applicantProfile.services_helped_in.unshift(service._id);

          service.save().then((service) => {
            Profile.findOne({ user: req.user._id })
              .populate('user')
              .then((askerProfile) => {
                applicantProfile.notifications.unshift({
                  title: `${
                    service.reveal_asker === false
                      ? 'Anonymous'
                      : askerProfile.first_name
                  } accepted your proposal to the service \"${service.name}\"`,
                  navigateTo: {
                    kind: 'service',
                    service: service._id
                  },
                  is_user_associated: true,
                  user_associated:
                    service.reveal_asker === false ? null : askerProfile.user,
                  user_profile_associated:
                    service.reveal_asker === false ? null : askerProfile._id
                });
                applicantProfile.save();

                if (applicantProfile.user.pushNotificationToken) {
                  sendNotifications([
                    {
                      to: applicantProfile.user.pushNotificationToken,
                      title: 'Your Proposal is Accepted!',
                      body: `${
                        service.reveal_asker === false
                          ? 'Anonymous'
                          : askerProfile.first_name
                      } accepted your proposal to the service \"${
                        service.name
                      }\"`,
                      sound: 'default'
                    }
                  ]);
                }
              });
          });
          return res.json({ service, success: true });
        });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      res.status(500).json({ ...errors, ...err });
    });
};
