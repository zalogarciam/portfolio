import { createSlice } from "@reduxjs/toolkit";
import { fetchExperienceData } from "../thunks/experienceThunk";

const initialState = {
  loading: false,
  error: {},
  experienceData: {}
};

export const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchExperienceData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchExperienceData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.experienceData = action.payload.data;
    });
    builder.addCase(fetchExperienceData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.experienceData = {};
    });
  }
});

export default experienceSlice.reducer;