import { createBrowserRouter, createHashRouter } from "react-router-dom";
import MainLayout from "../layouts/mainLayout";
import AboutMe from "../pages/aboutMe";
import Contact from "../pages/contact";
import Experience from "../pages/experience";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Projects from "../pages/projects";

export const mainRoutes = createBrowserRouter([
  {
    path: "/portfolio/",
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
            path: "/portfolio/about",
            element: <AboutMe />,
          },
          {
            path: "/portfolio/experience",
            element: <Experience />,
          },
          {
            path: "/portfolio/projects",
            element: <Projects />,
          },
          {
            path: "/portfolio/contact",
            element: <Contact />,
          },
          {
            path: "/portfolio/*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);
