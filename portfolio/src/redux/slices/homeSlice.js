import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeData } from "../thunks/homeThunk";

const initialState = {
  loading: false,
  error: {},
  homeData: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHomeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomeData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.homeData = action.payload.data;
    });
    builder.addCase(fetchHomeData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.homeData = {};
    });
  },
});

export default homeSlice.reducer;
