import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

const initialState = {
currentUser: {},
allUsers: []
};

export const getCurrentUser = createAsyncThunk("users/getCurrentUsers", async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get("/users/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  console.log(data)
  return data;
});

export const getAllUsers= createAsyncThunk("users/getAllUsers", async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get("/users", {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrentUser.pending]: (state, action) => {
      state.currentUser = {};
      state.status = "loading";
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.status = "loaded";
    },
    [getCurrentUser.rejected]: (state, action) => {
      state.currentUser = {};
      state.status = "error";
    },
    [getAllUsers.pending]: (state, action) => {
      state.allUsers = [];
      state.status = "loading";
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.allUsers = action.payload;
      state.status = "loaded";
    },
    [getAllUsers.rejected]: (state, action) => {
      state.allUsers = [];
      state.status = "error";
    },
  }
});

export const usersReducer = usersSlice.reducer;