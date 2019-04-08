import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  allServices: [],
  searchedServices: [],
  selectedService: [],

  getAllServicesLoading: false,
  getSearchedServicesLoading: false,
  createServiceLoading: false,
  proposeToServiceLoading: false,
  getServiceLoading: false,
  acceptServiceProposalLoading: false,
  markServiceAsDoneLoading: false,
  archiveServiceLoading: false,
  addReviewLoading: false,
  addCommentLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SERVICES_START:
      return {
        ...state,
        getAllServicesLoading: true,
      };

    case actionTypes.GET_ALL_SERVICES_FINISH:
      return {
        ...state,
        getAllServicesLoading: false,
        allServices: action.payload ? action.payload : [...state.allServices],
      };
    // ----------------------------------------------------------------------------------
    case actionTypes.GET_SEARCHED_SERVICES_START:
      return {
        ...state,
        getSearchedServicesLoading: true,
      };

    case actionTypes.GET_SEARCHED_SERVICES_FINISH:
      return {
        ...state,
        getSearchedServicesLoading: false,
        searchedServices: action.payload
          ? action.payload
          : [...state.searchedServices],
      };
    //---------------------------------------------------------------------------------------
    case actionTypes.CREATE_SERVICE_START:
      return {
        ...state,
        createServiceLoading: true,
      };

    case actionTypes.CREATE_SERVICE_FINISH:
      return {
        ...state,
        createServiceLoading: false,
      };

    case actionTypes.PROPOSE_TO_SERVICE_START:
      return {
        ...state,
        proposeToServiceLoading: true,
      };

    case actionTypes.PROPOSE_TO_SERVICE_FINISH:
      return {
        ...state,
        proposeToServiceLoading: false,
      };

    case actionTypes.GET_SERVICE_START:
      return {
        ...state,
        getServiceLoading: true,
      };

    case actionTypes.GET_SERVICE_FINISH:
      return {
        ...state,
        getServiceLoading: false,
        selectedService: action.payload
          ? action.payload
          : [...state.selectedService],
      };

    case actionTypes.ACCEPT_SERVICE_PROPOSAL_START:
      return {
        ...state,
        acceptServiceProposalLoading: true,
      };

    case actionTypes.ACCEPT_SERVICE_PROPOSAL_FINISH:
      return {
        ...state,
        acceptServiceProposalLoading: false,
      };

    case actionTypes.MARK_SERVICE_DONE_START:
      return {
        ...state,
        markServiceAsDoneLoading: true,
      };

    case actionTypes.MARK_SERVICE_DONE_FINISH:
      return {
        ...state,
        markServiceAsDoneLoading: false,
      };

    case actionTypes.ARCHIVE_SERVICE_START:
      return {
        ...state,
        archiveServiceLoading: true,
      };

    case actionTypes.ARCHIVE_SERVICE_FINISH:
      return {
        ...state,
        archiveServiceLoading: false,
      };

    case actionTypes.ADD_REVIEW_START:
      return {
        ...state,
        addReviewLoading: true,
      };

    case actionTypes.ADD_REVIEW_FINISH:
      return {
        ...state,
        addReviewLoading: false,
      };

      case actionTypes.ADD_COMMENT_START:
      return {
        ...state,
        addCommentLoading: true,
      };

    case actionTypes.ADD_COMMENT_FINISH:
      return {
        ...state,
        addCommentLoading: false,
      };

    default:
      return state;
  }
};
