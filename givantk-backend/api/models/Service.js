const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//include User model
const User = require('./User');

// Create Service model
const ServiceSchema = new Schema({
    name: String,
    description: String,
    service_location: String,
    brief_description: String,
    service_nature: String,
    givantk_points: Number,
    money_points: Number,
    applicant_requirment: {
        location: Boolean,
        givandtk: Boolean
    },
    service_type: String,
    start_time: Date,
    end_time: Date,
    reveal_owner: Boolean,
    service_state: Boolean,
    applicants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],    
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    doer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = Service = mongoose.model('service', ServiceSchema);
