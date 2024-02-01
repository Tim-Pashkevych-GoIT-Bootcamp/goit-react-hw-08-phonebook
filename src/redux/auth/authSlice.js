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
  isCurrentUserLoaded: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
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
        return initialState;
      })
      .addCase(loadCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isCurrentUserLoaded = true;
        state.error = null;
      })
      .addCase(loadCurrentUser.pending, state => {
        state.isCurrentUserLoaded = false;
      })
      .addCase(loadCurrentUser.rejected, state => {
        state.isCurrentUserLoaded = true;
      })
      .addMatcher(
        isAnyOf(userSignup.pending, userLogin.pending, userLogout.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(userSignup.rejected, userLogin.rejected, userLogout.rejected),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
