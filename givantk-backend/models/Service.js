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
  applicant_requirment: {
    location: Boolean,
    helped_before: Boolean
  },
  type: String, // 'ke' or 'es' or 'rc' or 'o' (knowledge exchange, everyday services, reach community, others)
  start_time: Date,
  end_time: Date,
  reveal_asker: Boolean,
  state: String, // 'new' or 'pending' or 'done'
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  asker: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  helper: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Service = mongoose.model('service', ServiceSchema);
