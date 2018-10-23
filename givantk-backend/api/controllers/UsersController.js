// including User model
const User = require('../models/User');


// get all users using GET request
exports.getAllUsers =  (req, res) => {
    User.find()
        .populate('Service') // show the services of the user 
        .then(result => res.json(result));
}

// create user using POST request
exports.setUser = (req, res) => {
    const newUser = new User({
        name: req.body.name,
        gender: req.body.gender,
        location: req.body.location,
        user_name: req.body.user_name,
        joined: req.body.joined,
        phone_number: req.body.phone_number,
        email: req.body.email,
        verified: req.body.verified,
        givantk_points: req.body.givantk_points,
        money_points: req.body.money_points
    });

    newUser.save().then( result => res.json(result));
}

// get one user using GET request
exports.getUser = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .populate('Service')
        .then(result => res.json(result));
}

// update user using PATCH request
exports.UpdateUser = (req, res) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    User.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => res.json(result));
}

// you must send the values in patch req as array not object
/**
 
    [
	    {"propName": "location", "value": "Cairo"},
	    {"propName": "email", "value": "test@osama.com"},
	    {"propName": "givantk_points", "value": "0"},
	    {"propName": "money_points", "value": "47749"}
    ]
 
 */