const mongoose = require('mongoose');
const Profile = mongoose.model('profile');


module.exports = async function validatePoints(points, type, id) {
  let error = '';
  if (points <= 0) {
    error = 'Kindly enter an amount greater than zero';
  } else if (!points) error = 'Kindly enter amount in numbers';
  else {
    const profile = await Profile.findOne({ user: id });
    if (type === 'paid') {
      console.log(profile.money_points);
      console.log(points)
      if (profile.money_points < points) {
        //if points are not enough ask him to recharge credit
        error = `your money score is ${
          profile.money_points
        } .Recharge from your Account tab :D `;
        console.log(error);
      }
    } else {
      if (profile.givantk_points < points) {
        console.log(points)
        //if points are not enough ask him to recharge credit
        error =
          profile.givantk_points !== 0
            ? `You only have ${
                profile.givantk_points
              } points, do free services to get more :D `
            : `You ran out of points. Get 5 more from your Account tab :D `;
        console.log(error);
      }
    }
  }
  return error;
};
