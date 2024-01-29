import axios from 'axios';

export const phonebookApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  phonebookApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  phonebookApi.defaults.headers.common.Authorization = '';
};
