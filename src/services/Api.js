import { create } from 'axios';
import { store } from './store';
import Toast from 'react-native-toast-message';
import { AlertDismiss } from '../components';
import { reset } from "app/reducers/auth.reducer";

const api = create({
  baseURL: 'http://45.32.106.28:3000/',
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
    AlertDismiss({
      message: error?.response?.data?.message || error?.response?.data?.errors?.[0]?.msg || 'Something went wrong!. Please login again',
      onPress: () => store.dispatch(reset())
    })
  }
  if (error.response.status === 400 || error.response.status === 404) {
    console.tron.log('error 400', error.response)
    Toast.show({
      type: 'error',
      text1: 'Error!',
      text2: error?.response?.data?.message || error?.response?.data?.errors?.[0]?.msg || 'Resource unavailable.',
      visibilityTime: 5000,
    });
  }
  return Promise.reject(error.response);
});

export default api;