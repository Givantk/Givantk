const isEmpty = require('./assets/is-empty');
const Validator = require('validator');
const mongoose = require('mongoose');
const Profile = mongoose.model('profile');

module.exports = async function validateService(data, id) {
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

  //type

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

  //Money validation

  if (data.paid) {
    //Send an error if the Money field_which is translated to money points_ is empty

    if (data.moneyPoints <= 0)
      errors.money = 'Kindly enter an amount greater than zero';
    else if (!data.moneyPoints) errors.money = 'Kindly enter amount in numbers';
    else {
      profile = await Profile.findOne({ user: id });
      //compare profile money points with the entered money points

      if (profile.money_points < data.moneyPoints) {
        //if points are not enough ask him to recharge credit

        errors.money = 'Not enought score, recharge from Account tab :D ';
      }
    }
  } //if the service is free
  else {
    if (data.givantkPoints === 0)
      errors.givantkPoints = 'Givantk Points is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
