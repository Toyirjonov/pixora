import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userdata: [{ email: "admin@gmail.com", password: "aqaqaqaq" }],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    register: (state, { payload }) => {
      state.userdata.push(payload);
      state.user = payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { logOut, login, register } = userSlice.actions;
export default userSlice.reducer;
