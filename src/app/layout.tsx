"use client"
import { Inter } from 'next/font/google'
import React, { ReactNode } from "react";
import Navigation from "./components/navigation/navbar";
import "./globals.css";


const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isOpen = false;
  const toggle = () => {
    // Your toggle logic here
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation isOpen={isOpen} toggle={toggle} />
        {children}
      </body>
    </html>
  );
};

export default Layout;