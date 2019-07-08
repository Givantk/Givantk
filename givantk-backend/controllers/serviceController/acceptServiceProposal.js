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
        errors.unauthorized = 'لم تقم بإنشاءالخدمة';
        return res.status(401).json(errors);
      }

      if (
        service.state === 'progressing' ||
        service.state === 'done' ||
        service.state === 'archived'
      ) {
        errors.unauthorized = 'لا يمكن قبول طلب التقدم نتيجة لحالة الخدمة';
        return res.status(401).json(errors);
      }

      const application = service.applications.find(
        (item) => item._id.toString() === proposalId
      );

      if (!application) {
        errors.noproposal = 'لم يتم إيجاد طلب التقدم للخدمة';
        return res.status(404).json(errors);
      }

      if (service.helper) {
        errors.alreadyhashelper = 'هذه الخدمة لديها ملبى بالفعل';
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
                  }  قبل طلبك للتقدم للخدمة \"${service.name}\"  `,
                  navigateTo: {
                    kind: 'service',
                    service: service._id,
                  },
                  is_user_associated: true,
                  user_associated:
                    service.reveal_asker === false ? null : askerProfile.user,
                  user_profile_associated:
                    service.reveal_asker === false ? null : askerProfile._id,
                });
                applicantProfile.save();

                if (applicantProfile.user.pushNotificationToken) {
                  sendNotifications([
                    {
                      to: applicantProfile.user.pushNotificationToken,
                      title: 'تم قبول طلب تقدمك لخدمة',
                      body: ` ${
                        service.reveal_asker === false
                          ? 'Anonymous'
                          : askerProfile.first_name
                      }  وافق على طلب تقدمك للخدمة \"${service.name}\" `,
                      sound: 'default',
                    },
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
