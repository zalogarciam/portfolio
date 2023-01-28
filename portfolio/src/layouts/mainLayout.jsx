import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer";
import Header from "../components/common/header";

const MainLayout = () => {
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
