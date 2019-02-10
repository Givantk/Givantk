const isEmpty = require('./assets/is-empty');
const Validator = require('validator');

module.exports = validateService = (data) => {
  let errors = {};

  // For required fields
  data.name = !isEmpty(data.name) ? data.name : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.nature = !isEmpty(data.nature) ? data.nature : '';
  data.type = !isEmpty(data.type) ? data.type : '';

  // name
  if (!Validator.isLength(data.name, { min: 2, max: 40 })) {
    errors.name = 'Name must be between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name is required';
  }

  // description
  if (!Validator.isLength(data.description, { min: 10, max: 1000 })) {
    errors.description = 'Description must be between 10 and 1000 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description is required';
  }

  // nature
  if (Validator.isEmpty(data.nature)) {
    errors.nature = 'Nature is required';
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = 'Type is required';
  }

  // start_time
  if (data.start_time)
    if (
      !(data.start_time instanceof Date) &&
      (typeof data.start_time == 'string' &&
        !(Validator.toDate(data.start_time) instanceof Date))
    ) {
      errors.start_time = 'Start time must be a date';
    }

  // end_time
  if (data.end_time)
    if (
      !(data.end_time instanceof Date) &&
      (typeof data.end_time == 'string' &&
        !(Validator.toDate(data.end_time) instanceof Date))
    ) {
      errors.end_time = 'End time must be a date';
    }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
