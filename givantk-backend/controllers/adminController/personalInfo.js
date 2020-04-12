const mongoose = require('mongoose');

// Models
const Profile = mongoose.model('profile');

module.exports = personalInfo = (req, res) => {
  const errors = {};

  // if (req.user !== 'admin') {
  //   errors.unauthorized = 'Unauthorized';
  //   return res.status(401).json(errors);
  // }

  const personalInfoArray = [];

  Profile.find()
    .sort({ date: -1 })
    .populate('user')
    .then((profiles) => {
      profiles.forEach((profile) => {
        personalInfoArray.unshift({
          id: profile.user._id,
          first_name: profile.first_name,
          last_name: profile.last_name,
          gender: profile.gender,
          phone_number: profile.phone_number,
          email: profile.user.email,
          location: profile.user.location,
          registration_date: profile.user.date.toDateString(),
          date_of_birth: new Date(profile.date_of_birth).toDateString(),
          skills: profile.skills,
          givantk_points: profile.givantk_points,
          money_points: profile.money_points
        });
      });

      return res.json(personalInfoArray);
    })
    .catch((err) => {
      errors.error = 'Error fetching users from database';
      res.status(500).json({ ...errors, ...err });
    });
};
