import * as bannerConstants from './../constants/banner';

const initialState = {
  listBanner: [],
};

const reducer = (state =  initialState, action) => {
  switch (action.type) {
    case bannerConstants.FETCH_BANNER: {
      return {
        ...state,
        listBanner: [],
      }
    }
    case bannerConstants.FETCH_BANNER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listBanner: data,
      }
    }
    case bannerConstants.FETCH_BANNER_FAILED: {
      return {
        ...state,
        listBanner: [],
      }
    }
    default:
      return state;
  }
};

export default reducer;
