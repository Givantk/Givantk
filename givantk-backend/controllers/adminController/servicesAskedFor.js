const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = servicesAskedFor = (req, res) => {
  const errors = {};

  if (req.user !== 'admin') {
    errors.unauthorized = 'Unauthorized';
    return res.status(401).json(errors);
  }

  const servicesAskedForArray = [];

  Profile.find()
    .sort({ date: -1 })
    .populate('user')
    .populate({
      path: 'services_asked_for',
      populate: { path: 'helper' }
    })
    .then((profiles) => {
      profiles = profiles.map((profile) => {
        profile.notifications = null;
        return profile;
      });
      profiles.forEach((profile) => {
        servicesAskedForArray.unshift({
          id: profile.user._id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          services_asked_for: []
        });

        profile.services_asked_for.forEach((service) => {
          servicesAskedForArray[0].services_asked_for.unshift({
            service_id: service._id,
            service_date: service.date.toDateString(),
            helper_first_name: service.helper ? service.helper.first_name : '_',
            helper_Second_name: service.helper ? service.helper.last_name : '_',
            helper_email: service.helper ? service.helper.email : '_',
            helper_location: service.helper ? service.helper.location : '_',
            service_name: service.name,
            service_nature: service.nature,
            service_type: service.type,
            service_state: service.state
          });
        });
      });

      return res.json(servicesAskedForArray);
    })
    .catch((err) => {
      errors.error = 'Error fetching users from database';
      res.status(500).json({ ...errors, ...err });
    });
};
