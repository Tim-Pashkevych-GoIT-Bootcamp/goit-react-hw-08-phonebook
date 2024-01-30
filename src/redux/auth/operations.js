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

// tim@email.com
// tim12345
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
  async (_, thunkApi) => {
    try {
      await phonebookApi.post('users/logout', thunkApi.getState().auth.token);
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loadCurrentUser = createAsyncThunk(
  'users/current',
  async (_, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.token;
      setToken(token);

      const { data } = await phonebookApi.get('users/current', token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
