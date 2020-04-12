const mongoose = require('mongoose');

// Models
const Service = mongoose.model('service');

module.exports = servicesInfo = (req, res) => {
  const errors = {};

  if (req.user !== 'admin') {
    errors.unauthorized = 'Unauthorized';
    return res.status(401).json(errors);
  }

  const servicesInfoArray = [];

  Service.find()
    .sort({ date: -1 })
    .then((services) => {
      services.forEach((service) => {
        servicesInfoArray.unshift({
          service_id: service._id,
          service_nature: service.nature,
          service_title: service.name,
          service_description: service.description,
          asker_id: service.asker.toString(),
          helper_id: service.helper ? service.helper.toString() : '_',
          applicants_id: service.applications
            ? service.applications.map((ap) => ap.user.toString())
            : '_',
          service_date: service.date.toDateString(),
          service_state: service.state,
          service_comments: service.comments.map((c) => ({
            comment_id: c._id,
            user_id: c.user.toString(),
            comment_body: c.body
          }))
        });
      });

      return res.json(servicesInfoArray);
    })
    .catch((err) => {
      errors.error = 'Error fetching users from database';
      res.status(500).json({ ...errors, ...err });
    });
};
