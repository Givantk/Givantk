const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = addGivantkPoints = (req, res) => {
  const errors = {};
  Profile.findOne({ user: req.user._id })

    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'You have no profile';
        return res.status(404).json(errors);
      }
      if (profile.givantk_points === 0)
        profile.givantk_points += req.body.pointsAdded;
      profile.save().then(() => {
        return res.json({
          success: true,
        });
      });
    })
    .catch((err) => {
      errors.error =
        'Something wrong hapened while adding points , please try again';
      res.status(500).json({ ...errors, ...err });
    });
};
