const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

module.exports = addReview = (req, res) => {
  const errors = {};

  const serviceId = req.params.service_id;

  Service.findById(serviceId)
    .then((service) => {
      Profile.findOne({ user: service.asker.toString() }).then(
        (askerProfile) => {
          askerProfile.save();
        },
      );

      // Updating service
      service.rated = true;
      service.save().then(() => {
        return res.json({ success: true });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      return res.status(500).json({ ...errors, ...err });
    });
};
