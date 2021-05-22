import { create } from 'axios';
import { store } from './store';
import { reset } from "app/reducers/auth.reducer";
// https://landapi.vipage.vn/vvlanding/auth/login
const api = create({
  baseURL: '',
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
  const token = state?.auth?.token
  return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
});

// Add a response interceptor
api.interceptors.response.use((response) => response, (error) => {
  if (error.response.status === 401) {
    console.tron.log('401', error.response)
  }
  if (error.response.status === 400 || error.response.status === 404) {
    console.tron.log('error 400', error.response)
  }
  return Promise.reject(error.response);
});

export default api;