const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//include Service model
const Service = require('./Service');

// Create User model
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  location: String,
  avatar: String,
  date: {
    type: Date,
    default: Date.now
  },
  login_credentials: {
    facebook: {
      id: {
        type: String,
        required: true
      },
      has_password: {
        type: Boolean,
        default: false
      }
    }
  }
});

module.exports = User = mongoose.model('user', UserSchema);
