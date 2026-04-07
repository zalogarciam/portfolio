"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import List from "./list";
import { BsList, BsX } from "react-icons/bs";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-dark/80 backdrop-blur-lg border-b border-foreground/10 shadow-xl"
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
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden">
            {/* Smooth Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-dark/40 backdrop-blur-md"
              onClick={toggleMenu}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-full xs:w-[80%] h-full bg-dark/98 backdrop-blur-xl shadow-2xl flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <img src={logo.src || logo} alt="Logo" className="h-14 w-auto" />
                <button
                  className="p-2 text-muted hover:text-accent transition-colors"
                  onClick={toggleMenu}
                >
                  <BsX className="w-10 h-10" />
                </button>
              </div>
              
              <nav>
                <List
                  elements={elements}
                  paths={paths}
                  className="flex flex-col gap-8 text-2xl font-bold"
                  handleClickList={toggleMenu}
                />
              </nav>

              <div className="mt-auto pt-8 border-t border-foreground/10 text-center">
                <p className="text-xs text-muted uppercase tracking-widest font-medium">
                  Gonzalo Garcia Martinez
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
