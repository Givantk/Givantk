const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = addReview = (req, res) => {
  const errors = {};

  const serviceId = req.params.service_id;

  Service.findById(serviceId)
    .then((service) => {
      // Updating service comments
      service.comments.unshift(req.body)

      service.save().then(() => {
        return res.json({ success: true });
      });
    })
    .catch((err) => {
      errors.error = 'Error fetching service from database';
      return res.status(500).json({ ...errors, ...err });
    });
};
