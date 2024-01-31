import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createContact, deleteContact, getAllContacts } from './operations.js';
import { userLogout } from './../auth/operations.js';

const initialState = {
  items: [],
  isLoading: false,
  isDrawerOpen: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setError(state, { payload }) {
      state.error = payload;
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
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllContacts.fulfilled,
          createContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllContacts.rejected,
          createContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setError, toggleDrawer } = contactsSlice.actions;
