const getAllServices = require('./getAllServices');
const createService = require('./createService');
const getServiceById = require('./getServiceById');
const updateService = require('./updateService');
const getAskedForServices = require('./getAskedForServices');
const getHelpedInServices = require('./getHelpedInServices');

module.exports = {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  getAskedForServices,
  getHelpedInServices
};
