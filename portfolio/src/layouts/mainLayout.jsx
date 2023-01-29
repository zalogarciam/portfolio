import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "../components/common/footer";
import Header from "../components/common/header";

const MainLayout = () => {
  
  // useEffect(() => {
  //   WebFont.load({
  //     typekit: {
  //       id: "Cartograph CF",
  //     },
  //   });
  // }, []);

  return (
    <>
      <Header />
      <main style={{ paddingTop: "5rem" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
