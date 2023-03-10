import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer";
import Header from "../components/common/header";

const MainLayout = () => {
  // Setting code theme as default theme
  // localStorage.setItem("theme", "code");

  const headerElements = [
    "Home",
    "About Me",
    "Experience",
    "Projects",
    "Contact",
  ];
  const headerPaths = ["", "about", "experience", "projects", "contact"];

  return (
    <>
      <div>
        <Header elements={headerElements} paths={headerPaths} />
        <main
          style={{
            paddingTop: "8rem",
            paddingBottom: "4rem",
            minHeight: "70vh",
          }}
        >
          <Outlet />
        </main>
        <Footer elements={headerElements} paths={headerPaths} />
      </div>
    </>
  );
};

export default MainLayout;
