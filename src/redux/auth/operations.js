import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearToken, phonebookApi, setToken } from 'axiosConfig/phonebookApi';

export const userSignup = createAsyncThunk(
  'users/signup',
  async (credentials, thunkApi) => {
    try {
      const { data } = await phonebookApi.post('users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'users/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await phonebookApi.post('users/login', credentials);

      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userLogout = createAsyncThunk(
  'users/logout',
  async (token, thunkApi) => {
    try {
      const { data } = await phonebookApi.post('users/logout', token);
      clearToken();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const userCurrent = createAsyncThunk(
  'user/current',
  async (token, thunkApi) => {
    try {
      const { data } = await phonebookApi.get('usres/current', token);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
