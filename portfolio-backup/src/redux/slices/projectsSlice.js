import { createSlice } from "@reduxjs/toolkit";
import { fetchProjectsData } from "../thunks/projectsThunk";

const initialState = {
  loading: false,
  error: {},
  projectsData: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProjectsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProjectsData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = {};
      state.projectsData = action.payload.data;
    });
    builder.addCase(fetchProjectsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.projectsData = {};
    });
  },
});

export default projectsSlice.reducer;
