import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";

export const fetchAboutMeData = createAsyncThunk(
    "aboutMe/fetchAboutMeData",
    async (_, {rejectWithValue}) => {
        try {
            const options = {
                method: "GET",
                url: "/aboutMe.json"
            }
            const {data} = await axiosInstance(options)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);