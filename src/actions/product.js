import * as productApis from '../apis/product';
import * as productConstants from '../constants/product';

export const fetchListProductSuccess = data => {
  return {
    type: productConstants.FETCH_PRODUCT_SUCCESS,
    payload: {
      data,
    }
  }
}

export const fetchListProductFailed = error => {
  return {
    type: productConstants.FETCH_PRODUCT_FAILED,
    payload: {
      error,
    }
  }
}

export const fetchListProduct = () => {
  return {
    type: productConstants.FETCH_PRODUCT,
  }
}

export const fetchListProductRequest = () => {
  return dispatch => {
    dispatch(fetchListProduct());
    productApis.getList().then(resp => {
      const { data } = resp;
      dispatch(fetchListProductSuccess(data));
    })
    .catch(error => {
      dispatch(fetchListProductFailed(error));
    });
  }
}
