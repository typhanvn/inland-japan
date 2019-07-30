import * as productCatConstants from '../constants/product_cat';

const initialState = {
  listProductCat: [],
};

const reducer = (state =  initialState, action) => {
  switch (action.type) {
    case productCatConstants.FETCH_PRODUCT_CAT: {
      return {
        ...state,
        listProductCat: [],
      }
    }
    case productCatConstants.FETCH_PRODUCT_CAT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listProductCat: data,
      }
    }
    case productCatConstants.FETCH_PRODUCT_CAT_FAILED: {
      return {
        ...state,
        listProductCat: [],
      }
    }
    default:
      return state;
  }
};

export default reducer;
