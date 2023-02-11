import { configureStore } from "@reduxjs/toolkit";
import aboutMeReducer from "./slices/aboutMeSlice";
import experienceReducer from "./slices/experienceSlice";
import projectsReducer from "./slices/projectsSlice";

export const store = configureStore({
  reducer: {
    aboutMe: aboutMeReducer,
    experience: experienceReducer,
    projects: projectsReducer
  },
});
