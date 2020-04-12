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
  recommenderInfo: {
    skills: [{ type: String }],
    job: String,
    location: String
  },
  invitedIn:[],
  notifications: {
    type: [
      {
        title: {
          type: String,
          required: true
        },
        content: String,
        seen: {
          type: Boolean,
          default: false
        },
        navigateTo: {
          kind: String, // service or profile or announcement
          service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service'
          },
          profile: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'profile'
          }
        },
        is_user_associated: {
          type: Boolean,
          default: false
        },
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
  services_asked_for_finished: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service' }
  ],
  services_helped_in_finished: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'service' }
  ],
  services_archived: [{ type: mongoose.Schema.Types.ObjectId, ref: 'service' }],

  average_services_rating: {
    type: Number,
    default: 0
  },

  sum_of_ratings: {
    type: Number,
    default: 0
  },
  number_of_ratings: {
    type: Number,
    default: 0
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
