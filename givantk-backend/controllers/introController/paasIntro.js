const mongoose = require('mongoose');

// Models
const user = mongoose.model('user');

module.exports = passIntro = (req, res) => {
  const errors = {};
  user
    .findById(req.user._id)
    .then((user) => {
      user.passedIntro = true;
      user.save().then(() => {
        return res.json({
          success: true
        });
      });
    })
    .catch((err) => {
      errors.error =
        'Something wrong hapened while passing intro , please try again';
      res.status(500).json({ ...errors, ...err });
    });
};
