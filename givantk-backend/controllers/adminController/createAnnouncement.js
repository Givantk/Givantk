const mongoose = require('mongoose');
const validator = require('validator');

// Models
const Profile = mongoose.model('profile');

module.exports = createAnnouncement = (req, res) => {
  const errors = {};

  if (req.user !== 'admin') {
    errors.unauthorized = 'Unauthorized';
    return res.status(401).json(errors);
  }

  const title = req.body.title;
  const content = req.body.content;

  if (!title || !content) {
    errors.invalid = 'invalid values';
    return res.status(400).json(errors);
  }

  Profile.find().then(profiles => {
    profiles.forEach((profile => {
      profile.notifications.unshift({
        title: title,
        content: content,
        navigateTo: {
          kind: 'announcement',
        },
      });
      profile.save();
    }))
    res.json({ success: true });
  }).catch(err => {
    errors.error = 'Database error';
    res.status(500).json({ ...errors, ...err });
  })
};
