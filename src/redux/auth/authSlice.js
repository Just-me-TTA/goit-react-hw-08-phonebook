import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './operations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    clearAuthError(state) {
      state.authError = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authError = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.authError = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.authError = null;
    });
    builder.addCase(refresh.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refresh.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.authError = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.authError = action.payload;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { clearAuthError } = authSlice.actions;
