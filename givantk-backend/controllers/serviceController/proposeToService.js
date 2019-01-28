const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');
const Service = mongoose.model('service');

// Validations
const validateServiceProposal = require('../../validations/serviceProposal');

module.exports = proposeToService = (req, res) => {
  // Validate
  const { errors, isValid } = validateServiceProposal(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Service.findById(req.params.id)
    .then((service) => {
      if (service.asker.toString() === req.user._id.toString()) {
        errors.unauthorized = "You can't propose to your own service";
        res.status(401).json(errors);
      }

      if (
        service.applicants.filter(
          (item) => item.user.toString() === req.user._id.toString()
        ).length > 0
      ) {
        errors.alreadyproposed = 'You have already proposed to this service';
        return res.status(400).json(errors);
      }

      Profile.findOne({ user: req.user._id }).then((profile) => {
        if (!profile) {
          errors.noprofile = 'No profile yet';
          return res.status(400).json(errors);
        }

        // Updating service
        service.applicants.unshift({
          user: req.user._id,
          proposal: req.body.proposal
        });

        // Updating profile
        profile.services_proposed_for.unshift(service._id);

        service.save().then((service) => {
          profile.save();
          return res.json({ service, success: true });
        });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      res.status(500).json({ ...errors, ...err });
    });
};
