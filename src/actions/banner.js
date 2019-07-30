import * as bannerApis from './../apis/banner';
import * as bannerConstants from './../constants/banner';

export const fetchListBannerSuccess = data => {
  return {
    type: bannerConstants.FETCH_BANNER_SUCCESS,
    payload: {
      data,
    }
  }
}

export const fetchListBannerFailed = error => {
  return {
    type: bannerConstants.FETCH_BANNER_FAILED,
    payload: {
      error,
    }
  }
}

export const fetchListBanner = () => {
  return {
    type: bannerConstants.FETCH_BANNER,
  }
}

/*
- fetchListPageRequest()
- Reset: store pages -> []
- fetchListPageSuccess { data response }
*/

export const fetchListBannerRequest = () => {
  return dispatch => {
    dispatch(fetchListBanner());
    bannerApis.getList().then(resp => {
      const { data } = resp;
      dispatch(fetchListBannerSuccess(data));
    })
    .catch(error => {
      dispatch(fetchListBannerFailed(error));
    });
  }
}
