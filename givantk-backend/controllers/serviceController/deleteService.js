const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = deleteService = (req, res) => {
  const errors = {};

  Service.findById(req.params.id)
    .then((service) => {
      if (service.asker.toString() !== req.user._id.toString()) {
        errors.unauthorized = "You can't delete this service";
        return res.status(401).json(errors);
      }
      service.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => {
      errors.error = 'Error checking for the service in database';
      return res.status(500).json({ ...errors, ...err });
    });
};
