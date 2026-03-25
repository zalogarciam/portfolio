"use client";

import { useState, useEffect } from "react";
import StoreProvider from "@/components/StoreProvider";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import ClientFloatingWhatsApp from "@/components/ClientFloatingWhatsApp";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import HackerSplash from "@/components/loader/hackerSplash";

export default function ClientLayout({ children, headerElements, headerPaths }) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("portfolio-loaded");
    if (!hasLoaded) {
      setShowSplash(true);
      sessionStorage.setItem("portfolio-loaded", "true");
    }
  }, []);

  return (
    <ThemeProvider>
      <StoreProvider>
        {showSplash && <HackerSplash onComplete={() => setShowSplash(false)} />}
        
        <div className={`transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
          <ClientFloatingWhatsApp
            phoneNumber="+51957247055"
            accountName="Gonzalo 💻"
            allowEsc
            allowClickAway
            notification
            notificationSound
            avatar={"https://zg-s3.s3.us-east-2.amazonaws.com/portfolio/zalo.webp"}
            chatMessage="¡Hola! ¿Cómo te puedo ayudar? 😊"
            statusMessage="Normalmente responde en 1 hora"
          />
          <Header elements={headerElements} paths={headerPaths} />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <Footer elements={headerElements} paths={headerPaths} />
        </div>
      </StoreProvider>
    </ThemeProvider>
  );
}
