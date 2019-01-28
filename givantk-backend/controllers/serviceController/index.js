const getAllServices = require('./getAllServices');
const createService = require('./createService');
const getServiceById = require('./getServiceById');
const updateService = require('./updateService');
const getAskedForServices = require('./getAskedForServices');
const getHelpedInServices = require('./getHelpedInServices');
const bookmarkService = require('./bookmarkService');
const unbookmarkService = require('./bookmarkService');
const deleteService = require('./deleteService');

module.exports = {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  getAskedForServices,
  getHelpedInServices,
  bookmarkService,
  unbookmarkService,
  deleteService
};
