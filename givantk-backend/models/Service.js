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
  service_location: String,
  brief_description: String,
  service_nature: String, // Free or paid
  givantk_points: Number, // Free points
  money_points: Number,
  applicant_requirment: {
    location: Boolean,
    givandtk: Boolean
  },
  service_type: String,
  start_time: Date,
  end_time: Date,
  reveal_asker: Boolean,
  service_state: Boolean,
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  asker: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  helper: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Service = mongoose.model('service', ServiceSchema);
