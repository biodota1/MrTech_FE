import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    userRole: null,
    isAuthenticated: false,
    username: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
      state.userRole = action.payload.role;
      state.isAuthenticated = true;
      state.username = action.payload.username;
    },
    logOut: (state, action) => {
      state.token = null;
      state.userRole = null;
      state.isAuthenticated = false;
      state.username = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token;
