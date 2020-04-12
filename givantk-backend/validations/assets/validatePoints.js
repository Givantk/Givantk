const mongoose = require('mongoose');
const Profile = mongoose.model('profile');

module.exports = async function validatePoints(points, type, id) {
  let error = '';
  //handle negative numbers and zeros
  if (points <= 0) {
    error = 'Kindly enter an amount greater than zero';
  } else if (!points) error = 'Kindly enter amount in numbers';
  else {
    const profile = await Profile.findOne({ user: id });
    if (type === 'paid') {
      if (profile.money_points < points) {
        //if points are not enough ask the user to recharge credit
        error = `your money score is ${
          profile.money_points
        } .Recharge from your Account tab :D `;
      }
    }
    //if type of the service is free
    else {
      if (profile.givantk_points < points) {
        //if points are not enough ask him to make more services or if he ran of points ask him to get 5 points
        //from his account
        error =
          profile.givantk_points !== 0
            ? `You only have ${
                profile.givantk_points
              } points, do free services to get more :D `
            : `You ran out of points. Get more from your Account tab :D `;
      }
    }
  }
  return error;
};
