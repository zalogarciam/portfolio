import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "../components/common/footer";
import Header from "../components/common/header";

const MainLayout = () => {
  
  const headerElements = ["Home", "About Me", "Experience", "Projects", "Contact"]
  const headerPaths = ["", "about", "experience", "projects", "contact"]

  return (
    <>
      <Header elements = {headerElements} paths = {headerPaths}/>
      <main style={{ paddingTop: "5rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
