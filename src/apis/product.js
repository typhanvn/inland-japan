import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants/index';

//http://localhost:3000/products
const url = 'products'

export const getList = () => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};
