import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants/index';

//http://localhost:3000/banners
const url = 'banners'

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
