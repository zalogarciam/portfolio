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
      {
        path: "/portfolio/about",
        element: <h1>About Me</h1>,
      },
      {
        path: "/portfolio/experience",
        element: <h1>Experience</h1>,
      },
      {
        path: "/portfolio/projects",
        element: <h1>Projects</h1>,
      },
      {
        path: "/portfolio/contact",
        element: <h1>Contact Me</h1>,
      },
    ],
  },
]);
