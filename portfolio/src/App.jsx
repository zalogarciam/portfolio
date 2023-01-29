import "./App.css";
import { mainRoutes } from "./routes/mainRoutes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={mainRoutes} />;
}

export default App;
