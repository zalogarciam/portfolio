"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import List from "./list";
import { BsList, BsX } from "react-icons/bs";
import ThemeSwitcher from "../theme/ThemeSwitcher";

const Header = ({ elements, paths }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-dark/80 backdrop-blur-lg border-b border-white/10 shadow-xl"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img
              src={logo.src || logo}
              alt="Logo"
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <List
              elements={elements}
              paths={paths}
              className="flex font-medium"
            />
          </div>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-muted hover:text-accent transition-colors"
              onClick={toggleMenu}
            >
              <BsList className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 z-[60] bg-dark/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
              <img src={logo.src || logo} alt="Logo" className="h-14 w-auto" />
              <button
                className="p-2 text-muted hover:text-accent"
                onClick={toggleMenu}
              >
                <BsX className="w-10 h-10" />
              </button>
            </div>
            <List
              elements={elements}
              paths={paths}
              className="flex flex-col gap-8 text-2xl font-bold"
              handleClickList={toggleMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
