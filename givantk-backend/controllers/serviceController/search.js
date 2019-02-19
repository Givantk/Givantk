const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = search = (req, res) => {
  const errors = {};
  Service.find({ name: new RegExp('^' + req.params.name + '$', 'i') })
    .sort({ date: -1 })
    .then((services) => {
      if (services.length === 0) {
        errors.noservices = 'No services found';
        return res.status(404).json(errors);
      }
      return res.json(services);
    })
    .catch((err) => {
      errors.error = 'Error fetching services from database';
      res.status(500).json({ ...errors, ...err });
    });
};
