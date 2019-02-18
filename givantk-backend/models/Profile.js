const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//include Service model
const Service = require('./Service');
// const Service=mongoose.model('service');

// Create User model
const ProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  first_name: String,
  last_name: String,
  gender: String,
  avatar: String,
  description: String,
  phone_number: Number,
  date_of_birth: Date,
  verified: Boolean,
  skills: {
    type: [String],
    required: true
  },
  notifications: {
    type: [
      {
        title: String,
        seen: {
          type: Boolean,
          default: false
        },
        navigateTo: {
          kind: String, // service or profile
          service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service'
          },
          profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'profile'
          }
        },
        is_user_associated: Boolean,
        user_associated: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user'
        },
        user_profile_associated: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'profile'
        }
      }
    ]
  },
  givantk_points: Number,
  money_points: Number,
  services_asked_for: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service' }
  ],
  services_helped_in: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service' }
  ],
  services_bookmarked: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service' }
  ],
  services_proposed_for: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service' }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
