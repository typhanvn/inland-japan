import * as newsApis from '../apis/news';
import * as newsConstants from '../constants/news';

export const fetchListNewsSuccess = data => {
  return {
    type: newsConstants.FETCH_NEWS_SUCCESS,
    payload: {
      data,
    }
  }
}

export const fetchListNewsFailed = error => {
  return {
    type: newsConstants.FETCH_NEWS_FAILED,
    payload: {
      error,
    }
  }
}

export const fetchListNews = () => {
  return {
    type: newsConstants.FETCH_NEWS,
  }
}

export const fetchListNewsRequest = () => {
  return dispatch => {
    dispatch(fetchListNews());
    newsApis.getList().then(resp => {
      const { data } = resp;
      dispatch(fetchListNewsSuccess(data));
    })
    .catch(error => {
      dispatch(fetchListNewsFailed(error));
    });
  }
}
