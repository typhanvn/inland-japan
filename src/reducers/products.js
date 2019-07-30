import * as productConstants from '../constants/product';

const initialState = {
  listProduct: [],
};

const reducer = (state =  initialState, action) => {
  switch (action.type) {
    case productConstants.FETCH_PRODUCT: {
      return {
        ...state,
        listProduct: [],
      }
    }
    case productConstants.FETCH_PRODUCT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listProduct: data,
      }
    }
    case productConstants.FETCH_PRODUCT_FAILED: {
      return {
        ...state,
        listProduct: [],
      }
    }
    default:
      return state;
  }
};

export default reducer;
