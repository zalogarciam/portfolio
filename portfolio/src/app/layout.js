import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Gonzalo Garcia Martinez | Portfolio",
  description: "Web developer portfolio showing my experience and projects.",
};

export default function RootLayout({ children }) {
  const headerElements = [
    "Home",
    "About Me",
    "Experience",
    "Projects",
    "Contact",
  ];
  const headerPaths = ["", "about", "experience", "projects", "contact"];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-slate-200 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300 overflow-x-hidden">
        <ClientLayout
          headerElements={headerElements}
          headerPaths={headerPaths}
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
