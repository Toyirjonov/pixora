import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    email: "admin@gmail.com",
    password: "aqaqaq",
    firstName: "",
    lastName: "",
    username: "",
    id: null,
    createdAt: null,
  },
  user: null,
  registeredUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      state.registeredUsers.push(action.payload);
      state.user = {
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        username: action.payload.username,
        id: action.payload.id,
      };
    },
    login(state, { payload }) {
      if (payload) {
        state.user = payload;
      } else {
        state.user = { email: state.userData.email };
      }
    },
    logout(state) {
      state.user = null;
    },
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { register, login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
