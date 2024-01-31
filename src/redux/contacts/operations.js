import { createAsyncThunk } from '@reduxjs/toolkit';
import { phonebookApi } from 'axiosConfig/phonebookApi';

export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await phonebookApi.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/create',
  async (contact, thunkApi) => {
    try {
      const { data } = await phonebookApi.post('contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkApi) => {
    try {
      const { data } = await phonebookApi.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/update',
  async (constact, thunkApi) => {
    try {
      const { data } = await phonebookApi.patch(
        `constacts/${constact.id}`,
        constact
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
