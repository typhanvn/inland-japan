import * as newsConstants from '../constants/news';

const initialState = {
  listNews: [],
};

const reducer = (state =  initialState, action) => {
  switch (action.type) {
    case newsConstants.FETCH_NEWS: {
      return {
        ...state,
        listNews: [],
      }
    }
    case newsConstants.FETCH_NEWS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listNews: data,
      }
    }
    case newsConstants.FETCH_NEWS_FAILED: {
      return {
        ...state,
        listNews: [],
      }
    }
    default:
      return state;
  }
};

export default reducer;
