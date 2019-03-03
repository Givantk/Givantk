const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = verifyPayment = (req, res) => {
  console.log('Connected');
  const errors = {};
  Profile.findOne({ user: req.user._id })

    .then((profile) => {
      if (!profile) {
        errors.noprofile = 'You have no profile';
        return res.status(404).json(errors);
      }

      return res.json({
        profile,
        success: true,
      });
    })
    .catch((err) => {
      errors.error = 'Error!! Payment has failed, please try again';
      res.status(500).json({ ...errors, ...err });
    });
};
