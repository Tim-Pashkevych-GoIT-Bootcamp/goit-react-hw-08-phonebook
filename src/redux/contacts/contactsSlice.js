import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  createContact,
  deleteContact,
  getAllContacts,
  updateContact,
} from './operations.js';
import { userLogout } from './../auth/operations.js';

const initialState = {
  items: [],
  isLoading: false,
  isDrawerOpen: false,
  selectedContact: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setError(state, { payload }) {
      state.error = payload;
    },
    setSelectedContact(state, { payload }) {
      state.selectedContact = state.items.find(item => item.id === payload);
    },
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        const contact = state.items.find(item => item.id === payload.id);
        contact.name = payload.name;
        contact.number = payload.number;
        state.selectedContact = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          item => item.id !== action.payload?.id
        );
      })
      .addCase(userLogout.fulfilled, () => {
        return initialState;
      })
      .addMatcher(
        isAnyOf(
          getAllContacts.pending,
          createContact.pending,
          deleteContact.pending,
          updateContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllContacts.fulfilled,
          createContact.fulfilled,
          deleteContact.fulfilled,
          updateContact.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllContacts.rejected,
          createContact.rejected,
          deleteContact.rejected,
          updateContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.selectedContact = null;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setError, toggleDrawer, setSelectedContact } =
  contactsSlice.actions;
