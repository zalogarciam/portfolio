import { Outlet } from "react-router-dom";
import Footer from "../components/common/footer";
import Header from "../components/common/header";
import { FloatingWhatsApp } from "react-floating-whatsapp";

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
        <FloatingWhatsApp
          phoneNumber="+51957247055"
          accountName="Gonzalo 💻"
          allowEsc
          allowClickAway
          notification
          notificationSound
          avatar={
            "https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/zalo.webp"
          }
          chatMessage="¡Hola! ¿Cómo te puedo ayudar? 😊"
          statusMessage="Normalmente responde en 1 hora"
        />
        <Header elements={headerElements} paths={headerPaths} />
        <main
          style={{
            paddingTop: "8rem",
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
