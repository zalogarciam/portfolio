import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const fetchExperienceData = createAsyncThunk(
  "experience/fetchExperienceData",
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "/experience.json",
      };
      const { data } = await axiosInstance(options);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
