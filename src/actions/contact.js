import * as contactApis from '../apis/contact';
import * as contactConstants from '../constants/contact';

export const addContact = () => {
  return {
    type: contactConstants.ADD_CONTACT,
  }
};

export const addContactSuccess = data => {
  return {
    type: contactConstants.ADD_CONTACT_SUCCESS,
    payload: {
      data,
    }
  }
}

export const addContactFailed = error => {
  return {
    type: contactConstants.ADD_CONTACT_FAILED,
    payload: {
      error,
    }
  }
}

export const addContactRequest = data => {
  return dispatch => {
    dispatch(addContact());
    contactApis.addTask(data).then(resp => {
      const { data } = resp;
      dispatch(addContactSuccess(data));
    })
    .catch(error => {
      dispatch(addContactFailed(error));
    });
  }
};
