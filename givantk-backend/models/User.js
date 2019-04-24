const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//include Service model
const Service = require('./Service');

// Create User model
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: String,
  email: String,
  password: String,
  location: String,
  avatar: String,
  date: {
    type: Date,
    default: Date.now,
  },
  login_credentials: {
    facebook: {
      id: String,
      has_password: {
        type: Boolean,
      },
    },
  },
  pushNotificationToken: String,
  passedIntro:Boolean,
});

module.exports = User = mongoose.model('user', UserSchema);
