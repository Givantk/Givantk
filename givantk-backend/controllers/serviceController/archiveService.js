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
          askerProfile.save();
        }
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

//q@q.com
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzc1Nzc5NGE3NmU3MTAwMTY0YWM3MWMiLCJmaXJzdF9uYW1lIjoiQWJkbyIsImxhc3RfbmFtZSI6IkZhd2F6IiwiZW1haWwiOiJxQHEuY29tIiwibG9jYXRpb24iOiJFbCBNYXJnIiwiaWF0IjoxNTUxMjg5NzIxfQ.8hQJwKvb5JU0Dyofayw3_DckmdEFyAfWVZOrOolK2TM
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzc1NzhiZWE3NmU3MTAwMTY0YWM3MjAiLCJmaXJzdF9uYW1lIjoiWmVpbmFiIiwibGFzdF9uYW1lIjoiSGVzaGFtIiwiZW1haWwiOiJ6QHouY29tIiwibG9jYXRpb24iOiJFbCBNYXRhcmV5YSIsImlhdCI6MTU1MTI4OTkwMH0.TyJGV_yOCZRfe4K5DUjzLlM23nKH6Wq0rwyaSGLvysg
