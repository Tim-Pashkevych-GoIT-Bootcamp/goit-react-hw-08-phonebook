import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { userCurrent, userLogin, userLogout, userSignup } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthErrors(state) {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(userSignup.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(userLogout.fulfilled, (state, { payload }) => {
      state = initialState;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(userCurrent.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addMatcher(
      isAnyOf(
        userSignup.pending,
        userLogin.pending,
        userLogout.pending,
        userCurrent.pending
      ),
      state => {
        state.isLoading = true;
      }
    );
    builder.addMatcher(
      isAnyOf(
        userSignup.rejected,
        userLogin.rejected,
        userLogout.rejected,
        userCurrent.rejected
      ),
      (state, { payload }) => {
        state.error = payload;
      }
    );
  },
});

export const { clearAuthErrors } = authSlice.actions;
export const authReducer = authSlice.reducer;
