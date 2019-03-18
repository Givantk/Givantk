import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  chats: [],
  
  loadUserChatsLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
// ----------------------------------------------------------------------------------
    case actionTypes.LOAD_USER_CHATS_START:
      return {
        ...state,
        loadUserChatsLoading: true,
      };

    case actionTypes.LOAD_USER_CHATS_FINISH:
      return {
        ...state,
        loadUserChatsLoading: false,
        chats: action.payload ? action.payload : [...state.chats],
      };
//---------------------------------------------------------------------------------------

    default:
      return state;
  }
};
