const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

// Validations
const validateService = require('../../validations/service');

module.exports = updateService = (req, res) => {
  const errors = {};

  Service.findById(req.params.id)
    .then((service) => {
      if (service.asker.toString() !== req.user._id.toString()) {
        errors.unauthorized = "You can't update this service";
        return res.status(401).json(errors);
      }

      const newServiceInfo = Object.assign(service, req.body);

      // Validate
      const { errors, isValid } = validateService(newServiceInfo);
      if (!isValid) {
        return res.status(400).json(errors);
      }

      if (typeof req.body.start_time === 'string') {
        newServiceInfo.start_time = validator.toDate(req.body.start_time);
      }

      if (typeof req.body.end_time === 'string') {
        newServiceInfo.end_time = validator.toDate(req.body.end_time);
      }

      if (req.body.applicant_requirment) {
        newServiceInfo.applicant_requirment = {
          location: req.body.applicant_requirment,
          helped_before: req.body.helped_before
        };
      }

      Service.findOneAndUpdate(
        { _id: req.params.id },
        { $set: newServiceInfo },
        { new: true }
      ).then((service) =>
        res.json({
          service,
          success: true
        })
      );
    })
    .catch((err) => {
      errors.error = 'Error checking for the service in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
