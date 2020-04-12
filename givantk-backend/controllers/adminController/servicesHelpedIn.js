const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = servicesHelpedIn = (req, res) => {
  const errors = {};

  if (req.user !== 'admin') {
    errors.unauthorized = 'Unauthorized';
    return res.status(401).json(errors);
  }

  const servicesHelpedInArray = [];

  Profile.find()
    .sort({ date: -1 })
    .populate('user')
    .populate({
      path: 'services_helped_in',
      populate: { path: 'asker' }
    })
    .then((profiles) => {
      profiles.forEach((profile) => {
        console.log(profile)

        servicesHelpedInArray.unshift({
          id: profile.user._id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          services_helped_in: []
        });

        profile.services_helped_in.forEach((service) => {
          servicesHelpedInArray[0].services_helped_in.unshift({
            service_id: service._id,
            service_date: service.date.toDateString(),
            asker_first_name: service.asker.first_name,
            asker_Second_name: service.asker.last_name,
            asker_email: service.asker.email,
            asker_location: service.asker.location,
            service_name: service.name,
            service_nature: service.nature,
            service_type: service.type,
            service_state: service.state,

          });
        });
      });

      return res.json(servicesHelpedInArray);
    })
    .catch((err) => {
      errors.error = 'Error fetching users from database';
      res.status(500).json({ ...errors, ...err });
    });
};
