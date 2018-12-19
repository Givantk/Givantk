const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//include Service model
const Service = require('./Service');

// Create User model
const UserSchema = new Schema({
    name: String,
    gender: String,
    location: String,
    user_name: String,
    joined: Date,
    phone_number: Number,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    verified: Boolean,
    givantk_points: Number,
    money_points: Number,
    services_owned: [{type: mongoose.Schema.Types.ObjectId, ref: 'Service'}],
    services_done: [{type: mongoose.Schema.Types.ObjectId, ref: 'Service'}],
});

module.exports = User = mongoose.model('user', UserSchema);
