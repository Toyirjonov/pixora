import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthReady: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    register: (state, { payload }) => {
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
    authReady: (state) => {
      state.isAuthReady = true;
    },
  },
});

export const { logOut, login, register, authReady } = userSlice.actions;
export default userSlice.reducer;
