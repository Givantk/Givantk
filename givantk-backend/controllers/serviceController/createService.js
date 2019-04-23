const mongoose = require('mongoose');
const validator = require('validator');

// Models
const Service = mongoose.model('service');
const Profile = mongoose.model('profile');

// Validations
const validateService = require('../../validations/service');

//Rules
const rules = require('../../assets/rules');

module.exports = createService = (req, res) => {
  // Validate
  validateService(req.body, req.user._id).then((validation) => {
    const { errors, isValid } = validation;
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
      givantk_points: req.body.givantkPoints,
      money_points: rules.AppShareEquation(req.body.moneyPoints),
      type: req.body.type,
      reveal_asker: !req.body.isAnonymous,
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
            errors.noprofile =
              "You haven't added enough details to your profile";
            return res.status(400).json(errors);
          }
          profile.services_asked_for.unshift(service._id);
          //check if the service is paid, if it's then subtract its points from user's money points
          if (req.body.paid) {
            profile.money_points = profile.money_points - req.body.moneyPoints;
          } else if (req.body.free) {
            profile.givantk_points =
              profile.givantk_points - req.body.givantkPoints;
          }
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
  });
};
