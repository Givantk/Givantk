const getAllUsers = require('./getAllUsers');
const signupUser = require('./signupUser');
const loginUser = require('./loginUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const getUser = require('./getUser');
const getUserById = require('./getUserById');
const setUserNotificationToken = require('./setUserNotificationToken');

module.exports = {
  getAllUsers,
  signupUser,
  loginUser,
  updateUser,
  deleteUser,
  getUser,
  getUserById,
  setUserNotificationToken
};
