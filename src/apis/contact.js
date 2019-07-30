import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants/index';

//http://localhost:3000/contacts
const url = 'contacts'

export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
