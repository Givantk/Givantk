// including Service model
const Service = require('../models/Service');

// get all services using GET request
exports.getAllServices =  (req, res) => {
    Service.find()
        .populate('User') // show the users of the service
        .then(result => res.json(result));
}

// create service using POST request
exports.setService = (req, res) => {
    const newService = new Service({
        name: req.body.name,
        description: req.body.description,
        service_location: req.body.service_location,
        brief_description: req.body.brief_description,
        service_nature: req.body.service_nature,
        givantk_points: req.body.givantk_points,
        money_points: req.body.money_points,
        applicant_requirment :{
            location: req.body.applicant_requirment.location,
            givandtk: req.body.applicant_requirment.givandtk
        },
        service_type: req.body.service_type,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        reveal_owner: req.body.reveal_owner,
        service_state: req.body.service_state,
        applicants: [req.body.applicantsId],
        owner: req.body.ownerId,
        doer: req.body.doerId
    });
    newService.save().then( result => res.status(201).json(result));
}

// get one service using GET request
exports.getService = (req, res) => {
    const id = req.params.id;
    Service.find({_id: id})
            .populate('User')
            .then(result => res.json(result));
}

// update service using PATCH request
exports.UpdateService = (req, res) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Service.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => res.json(result));
}