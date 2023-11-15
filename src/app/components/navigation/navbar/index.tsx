import React from "react";
import Link from "next/link";
import Button from "./button";
import Logo from "./Logo";

interface NavbarProps {
    isOpen: boolean;
    toggle: () => void;
  }

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggle }) => {
  return (
      <div className="w-full h-20 bg-gray-400 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo ></Logo>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/compare">
                  <p>compare</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;