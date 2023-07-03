import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "../../controllers/requests";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: {id: '', email: '', password : '', token:''},
    sessions: [],
  },
  reducers: {
    logUserIn: (userInfo, userInput) => {
      userInfo.userInfo = userInput.payload
      userInfo.sessions.push()
      console.log(userInfo)
    },
    setUser: (userInfo) => {},
    logUserOut: (userInfo) => {},
  },
});

export default auth = authSlice.reducer;
export const loginUser = authSlice.actions.logUserIn;
export const setLoggedInUser = authSlice.actions.setUser;
export const logUserOut = authSlice.actions.logUserOut;
