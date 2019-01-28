const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = getServiceById = (req, res) => {
  const errors = {};
  Service.findById(req.params.id)
    .then((service) => {
      res.json({
        service,
        success: true
      });
    })
    .catch((err) => {
      errors.error = 'Error checking for the service in the database';
      res.status(500).json({ ...errors, ...err });
    });
};
