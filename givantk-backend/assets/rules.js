const numberOfMoneyPointsOnSignup = 0;
const numberOfGivantkPointsOnSignup = 100;
const AppShareEquation = function(value) {
  return Math.round((value / 1.1) * 100) / 100;
};

module.exports = {
  numberOfMoneyPointsOnSignup,
  numberOfGivantkPointsOnSignup,
  AppShareEquation
};
