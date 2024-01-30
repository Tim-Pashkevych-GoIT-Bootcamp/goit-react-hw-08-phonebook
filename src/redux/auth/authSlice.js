import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loadCurrentUser,
  userLogin,
  userLogout,
  userSignup,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
  formId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthFormId(state, { payload }) {
      state.formId = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userSignup.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state, { payload }) => {
        state = initialState;
      })
      .addCase(loadCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          userSignup.pending,
          userLogin.pending,
          userLogout.pending,
          loadCurrentUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          userSignup.rejected,
          userLogin.rejected,
          userLogout.rejected,
          loadCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export const { setAuthFormId } = authSlice.actions;
export const authReducer = authSlice.reducer;
