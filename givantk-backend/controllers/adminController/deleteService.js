const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = deleteService = (req, res) => {
  const errors = {};

  console.log(req)
  Service.findById(req.body.service_id)
    .then((service) => {
        console.log('I am here')
      service.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => {
        console.log(err)
      errors.error = 'Error checking for the service in database';
      return res.status(500).json({ ...errors, ...err });
    });
};
