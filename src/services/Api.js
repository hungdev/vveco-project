import { create } from 'axios';
import { store } from '../App';
import { reset } from "../reducers/authReducer";

// https://landapi.vipage.vn/vvlanding/auth/login
// https://landapi.vipage.vn/vvlanding/api/user/getbyid?id=1
// https://landapi.vipage.vn/vvlanding/api/bill/shop/1/get?page=1&size=10

const api = create({
  baseURL: process.env.REACT_APP_API_KEY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Cache: 'no-cache',
  },
  timeout: 30000,
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  const state = store.getState();
  // const token = state?.authReducer?.token
  const token = localStorage.getItem('token');
  return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
});

// Add a response interceptor
api.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    console.log('401', error.response)
    // window.alert('Something went wrong!. Please login again');  //eslint-disable-line
    // window.location.reload();
    store.dispatch(reset());
    localStorage.removeItem('token');
    window.location.href = '/#/login';
  }
  if (error.response.status === 400 || error.response.status === 404) {
    console.log('error 400', error.response)
  }
  return Promise.reject(error.response);
});

export default api;