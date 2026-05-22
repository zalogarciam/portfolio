import { configureStore } from "@reduxjs/toolkit";
import aboutMeReducer from "./slices/aboutMeSlice";
import experienceReducer from "./slices/experienceSlice";
import projectsReducer from "./slices/projectsSlice";
import homeReducer from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    aboutMe: aboutMeReducer,
    experience: experienceReducer,
    projects: projectsReducer,
    home: homeReducer,
  },
});
