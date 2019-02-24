const mongoose = require('mongoose');
const validator = require('validator');

// Models
const Profile = mongoose.model('profile');

// Validations
const validateProfile = require('../../validations/profile');

module.exports = makeProfile = (req, res) => {
  Profile.findOne({ user: req.user._id }).then((profile) => {
    if (!profile) {
      // New profile

      // Validate
      const { errors, isValid } = validateProfile(req.body);
      if (!isValid) {
        return res.status(400).json(errors);
      }

      console.log(req.file)

      const newProfile = {
        user: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        gender: req.body.gender,
        avatar: req.file.path,
        phone_number: req.body.phone_number,
        date_of_birth: req.body.date_of_birth,
        skills: JSON.parse(req.body.skills),
        description: req.body.description,
        givantk_points: 0,
        money_points: 0,
        notifications: [],
        services_asked_for: [],
        services_helped_in: [],
        services_bookmarked: [],
        services_proposed_for: []
      };

      if (typeof req.body.date_of_birth === 'string') {
        newProfile.date_of_birth = validator.toDate(req.body.date_of_birth);
      }

      new Profile(newProfile)
        .save()
        .then((profile) => {
          res.json({ profile, success: true });
        })
        .catch((err) => {
          errors.error = 'Error saving profile into the database';
          res.status(500).json({ ...errors, ...err });
        });
    } else if (profile) {
      // Update profile

      const newProfileInfo = Object.assign(profile, req.body);
      // Validate
      const { errors, isValid } = validateProfile(newProfileInfo);
      if (!isValid) {
        return res.status(400).json(errors);
      }

      Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: newProfileInfo },
        { new: true }
      ).then((profile) =>
        res.json({
          profile,
          success: true
        })
      );
    }
  });
};
