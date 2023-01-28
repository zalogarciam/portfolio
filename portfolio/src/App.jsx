import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={mainRoutes} />;
}

export default App;
