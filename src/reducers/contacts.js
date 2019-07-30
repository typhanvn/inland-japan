import * as contactConstants from '../constants/contact';

const initialState = {
  listContact: [],
};

const reducer = (state =  initialState, action) => {
  switch (action.type) {
    case contactConstants.ADD_CONTACT: {
      return {
        ...state,
        listContact: [],
      }
    }
    case contactConstants.ADD_CONTACT_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        listContact: [data],
      }
    }
    case contactConstants.ADD_CONTACT_FAILED: {
      return {
        ...state,
        listContact: [],
      }
    }
    default:
      return state;
  }
};

export default reducer;
