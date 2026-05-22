import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const fetchProjectsData = createAsyncThunk(
  "projects/fetchProjectsData",
  async (_, { rejectWithValue }) => {
    try {
      const options = {
        method: "GET",
        url: "/projects.json",
      };
      const { data } = await axiosInstance(options);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
