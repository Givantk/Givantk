const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//include User model
const User = require('./User');

// Create Service model
const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: String,
  brief_description: String,
  nature: {
    type: String,
    required: true
  }, // 'free' or 'paid'
  givantk_points: Number, // Free points
  money_points: Number,
  paymentType: String,
  applicant_requirment: {
    location: Boolean,
    helped_before: Boolean
  },
  type: {
    type: String,
    required: true
  }, // 'ke' or 'es' or 'rc' or 'o' (knowledge exchange, everyday services, reach community, others)
  start_time: Date,
  end_time: Date,
  reveal_asker: Boolean,
  state: String, // 'new' or 'pending' or 'progressing' or 'done' or 'archived'
  rated_by_asker: Boolean, //check whether the service is rated or not
  rated_by_helper: Boolean,
  asker_is_rated: {
    chosen_rating: Number,
    written_review: String
  },
  helper_is_rated: {
    chosen_rating: Number,
    written_review: String
  },
  applications: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
      proposal: String,
      chosen: Boolean,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
      content: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  asker: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  helper: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  date: {
    type: Date,
    default: Date.now
  },
  recommenderInfo: {
    skills: [{ type: String }],
    job: [{ type: String }],
    location: [{ type: String }]
  }
});

module.exports = Service = mongoose.model('service', ServiceSchema);
