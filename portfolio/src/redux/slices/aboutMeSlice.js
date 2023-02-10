import { createSlice } from "@reduxjs/toolkit";
import { fetchAboutMeData } from "../thunks/aboutMeThunk";

const initialState = {
  loading: false,
  error: {},
  aboutMeData: {}
};

export const aboutMeSlice = createSlice({
  name: 'aboutMe',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAboutMeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAboutMeData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      console.log(action.payload.data);
      state.aboutMeData = action.payload.data;
    });
    builder.addCase(fetchAboutMeData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.aboutMeData = {};
    });
  }
});

export default aboutMeSlice.reducer;