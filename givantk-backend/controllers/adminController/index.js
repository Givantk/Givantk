const loginAdmin = require('./loginAdmin');
const personalInfo = require('./personalInfo');
const userServices = require('./userServices');
const servicesHelpedIn = require('./servicesHelpedIn');
const servicesAskedFor = require('./servicesAskedFor');
const servicesInfo = require('./servicesInfo');
const createAnnouncement = require('./createAnnouncement');
const deleteService=require('./deleteService');
const banUser=require('./banUser');
const unBanUser=require('./unBanuser');

module.exports = {
  loginAdmin,
  personalInfo,
  userServices,
  servicesHelpedIn,
  servicesAskedFor,
  servicesInfo,
  createAnnouncement,
  deleteService,
  banUser,
  unBanUser
};
