import { configureStore } from "@reduxjs/toolkit";
import aboutMeReducer from "./slices/aboutMeSlice";
import experienceReducer from "./slices/experienceSlice";

export const store = configureStore({
  reducer: {
    aboutMe: aboutMeReducer,
    experience: experienceReducer
  },
});
