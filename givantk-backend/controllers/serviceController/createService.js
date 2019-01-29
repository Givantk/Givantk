const mongoose = require('mongoose');
const validator = require('validator');

// Models
const Service = mongoose.model('service');
const Profile = mongoose.model('profile');

// Validations
const validateService = require('../../validations/service');

module.exports = createService = (req, res) => {
  // Validate
  const { errors, isValid } = validateService(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newService = {
    asker: req.user._id,
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
    newService.start_time = validator.toDate(req.body.start_time);
  }

  if (typeof req.body.end_time === 'string') {
    newService.end_time = validator.toDate(req.body.end_time);
  }

  if (req.body.applicant_requirment) {
    newService.applicant_requirment = {
      location: req.body.applicant_requirment,
      helped_before: req.body.helped_before
    };
  }

  new Service(newService)
    .save()
    .then((service) => {
      Profile.findOne({ user: req.user._id }).then((profile) => {
        if (!profile) {
          service.remove();
          errors.noprofile = "You haven't added enough details to your profile";
          return res.status(400).json(errors);
        }
        profile.services_asked_for.unshift(req.user._id);
        profile
          .save()
          .then(() => res.json({ service, success: true }))
          .catch((err) => {
            service.remove();
            errors.error = 'Error saving service into the profile';
            res.status(500).json({ ...errors, ...err });
          });
      });
    })
    .catch((err) => {
      errors.error = 'Error saving service into the database';
      res.status(500).json({ ...errors, ...err });
    });
};
