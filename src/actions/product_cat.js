import * as productCatApis from '../apis/product_cat';
import * as productCatConstants from '../constants/product_cat';

export const fetchListProductCatSuccess = data => {
  return {
    type: productCatConstants.FETCH_PRODUCT_CAT_SUCCESS,
    payload: {
      data,
    }
  }
}

export const fetchListProductCatFailed = error => {
  return {
    type: productCatConstants.FETCH_PRODUCT_CAT_FAILED,
    payload: {
      error,
    }
  }
}

export const fetchListProductCat = () => {
  return {
    type: productCatConstants.FETCH_PRODUCT_CAT,
  }
}

export const fetchListProductCatRequest = () => {
  return dispatch => {
    dispatch(fetchListProductCat());
    productCatApis.getList().then(resp => {
      const { data } = resp;
      dispatch(fetchListProductCatSuccess(data));
    })
    .catch(error => {
      dispatch(fetchListProductCatFailed(error));
    });
  }
}
