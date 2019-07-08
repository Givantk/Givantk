const mongoose = require('mongoose');
const sendNotifications = require('../../assets/utils/sendNotifications');

//Models

const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = inviteHelper = (req, res) => {
  const errors = {};

  Profile.findById(req.params.profile_id)
    .populate('user')
    .then((invitedProfile) => {
      const { serviceId } = req.body;
      Profile.findOne({ user: req.user._id }).then((askerProfile) => {
        Service.findById(serviceId).then((service) => {
          invitedProfile.notifications.unshift({
            title: `${
              service.reveal_asker === false
                ? 'Anonymous'
                : req.user.first_name + req.user.last_name
            }
            دعاك للخدمة \"${service.name}\"  `,
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
          if (invitedProfile.invitedIn&&Array.isArray(invitedProfile.invitedIn)) {
            invitedProfile.invitedIn.unshift(serviceId);
            console.log(invitedProfile.invitedIn)
          } else {
            invitedProfile.invitedIn = [];
            invitedProfile.invitedIn.unShift(serviceId);
          }
          invitedProfile.save();

          if (invitedProfile.user.pushNotificationToken) {
            sendNotifications([
              {
                to: invitedProfile.user.pushNotificationToken,
                title: 'أنت مدعو لخدمة',
                body: ` ${
                  service.reveal_asker === false
                    ? 'Anonymous'+'\n'
                    : askerProfile.first_name + askerProfile.last_name+'\n'
                } دعاك للخدمة \"${service.name}\" `,
                sound: 'default',
              },
            ]);
          }
          return res.json({ success: true });
        });
      });
    })
    .catch((err) => {
      errors.error = 'Error inviting helper ';
      res.status(500).json({ ...errors, ...err });
    });
};
