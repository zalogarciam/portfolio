import { createBrowserRouter, createHashRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import AboutMe from "../pages/aboutMe";
import Contact from "../pages/contact";
import Experience from "../pages/experience";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Projects from "../pages/projects";

export const mainRoutes = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/about",
            element: <AboutMe />,
          },
          {
            path: "/experience",
            element: <Experience />,
          },
          {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);
