import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import Home from "../pages/home";
export const mainRoutes = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <MainLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
