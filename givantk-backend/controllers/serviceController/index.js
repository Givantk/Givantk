const getAllServices = require('./getAllServices');
const createService = require('./createService');
const getServiceById = require('./getServiceById');
const updateService = require('./updateService');
const getAskedForServices = require('./getAskedForServices');
const getHelpedInServices = require('./getHelpedInServices');
const bookmarkService = require('./bookmarkService');
const unbookmarkService = require('./unbookmarkService');
const deleteService = require('./deleteService');
const proposeToService = require('./proposeToService');
const unproposeToService = require('./unproposeToService');
const acceptServiceProposal = require('./acceptServiceProposal');
const markServiceAsDone = require('./markServiceAsDone');
const archiveService = require('./archiveService');
const getSearchedServices = require('./getSearchedServices');
const addReview = require('./addReview');
const addComment = require('./addComment');
const getRecommendedHelpers = require('./getRecommendedHelpers');
const getRecommendedServices=require('./getRecommendedServices');

module.exports = {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  getAskedForServices,
  getHelpedInServices,
  bookmarkService,
  unbookmarkService,
  deleteService,
  proposeToService,
  unproposeToService,
  acceptServiceProposal,
  markServiceAsDone,
  archiveService,
  getSearchedServices,
  addReview,
  addComment,
  getRecommendedHelpers,
  getRecommendedServices,
};
