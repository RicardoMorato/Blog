import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import api from "./api";

// Thunks
export const fetchPosts = createAsyncThunk("getPosts/fetch", async () => {
  const res = await api.get("/api/posts");
  return res.data;
});

// Reducer
export const getPostsReducer = createSlice({
  name: "getPosts",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.data = {
        isLoading: true,
      };
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = {
        isLoading: false,
        payload: action.payload,
      };
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.data = {
        isLoading: false,
        error: action.error ?? "Algo deu errado",
      };
    });
  }
}).reducer;
