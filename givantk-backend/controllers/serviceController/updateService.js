const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

// Validations
const validateService = require('../../validations/service');

module.exports = updateService = (req, res) => {
  // Validate
  const { errors, isValid } = validateService(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newServiceInfo = {
    asker: req.user._id.toString(),
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    brief_description: req.body.brief_description,
    nature: req.body.nature,
    givantk_points: req.body.givantk_points,
    money_points: req.body.money_points,
    type: req.body.type,
    reveal_asker: req.body.reveal_asker,
    state: 'new'
  };

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

  Service.findById(req.params.id)
    .then((service) => {
      console.log('service.asker', service.asker);
      console.log('req.user._id', req.user._id);
      if (service.asker.toString() !== req.user._id.toString()) {
        errors.unauthorized = "You can't update this service";
        return res.status(401).json(errors);
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
