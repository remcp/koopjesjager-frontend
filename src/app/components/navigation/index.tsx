import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface NavigationProps {
  isOpen: boolean;
  toggle: () => void;
}

const Navigation: React.FC<NavigationProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
        <Navbar isOpen={isOpen} toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
      
    </>
  );
};

export default Navigation;