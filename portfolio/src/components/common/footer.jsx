"use client";

import React from "react";
import Link from "next/link";
import logo from "../../assets/img/logo.png";
import ContactInformation from "../contact/contactInformation";
import List from "./list";
import SocialMedia from "./socialMedia";

const Footer = ({ elements, paths }) => {
  return (
    <footer className="mt-auto border-t border-foreground/10 bg-background-start/50 backdrop-blur-md">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="group">
              <img 
                src={logo.src || logo} 
                alt="Logo" 
                className="h-14 w-auto group-hover:scale-110 transition-transform duration-300" 
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              Web designed and developed by Gonzalo Garcia Martinez. 
              Building modern digital experiences with passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-6">
            <h5 className="text-foreground font-bold text-lg tracking-tight uppercase">
              Quick Links
            </h5>
            <List 
              elements={elements} 
              paths={paths} 
              className="flex-col !items-center md:!items-start space-y-3 !mx-0"
            />
          </div>

          {/* Social and Contact */}
          <div className="flex flex-col space-y-6">
            <h5 className="text-foreground font-bold text-lg tracking-tight uppercase">
              Connect
            </h5>
            <SocialMedia />
            <div className="pt-4">
              <ContactInformation
                email={"gegarciam95@gmail.com"}
                email2={"zalogarciam@gmail.com"}
                phone={"+51 957247055"}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-foreground/5 flex flex-col items-center space-y-4">
          <p className="text-muted text-sm text-center">
            "I can fix the World 🌎, but they won't give me the source code 💻"
          </p>
          <p className="text-muted text-sm text-center font-medium">
            © {new Date().getFullYear()} Gonzalo Garcia Martinez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
