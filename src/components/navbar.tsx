"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">

       
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/Avion.png" alt="Logo" width={65} height={30} />
        </div>

        
        <div className="flex items-center space-x-4 absolute left-6">
          <Image src="/Search.png" width={20} height={20} alt="Search Icon" />
        </div>
        <div className=" items-center space-x-4 ml-auto hidden lg:flex">
          <Image
            src="/Shopping--cart.png"
            width={16}
            height={16}
            alt="Shopping Cart"
            className="cursor-pointer"
          />
          <Image
            src="/User--avatar.png"
            width={16}
            height={16}
            alt="User Avatar"
            className="cursor-pointer"
          />
        </div>

        <button
          className="text-2xl lg:hidden ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className="hidden lg:flex justify-center space-x-6 py-2">
        <a href="#" className="hover:text-gray-500">Plant pots</a>
        <a href="#" className="hover:text-gray-500">Ceramics</a>
        <a href="#" className="hover:text-gray-500">Tables</a>
        <a href="#" className="hover:text-gray-500">Chairs</a>
        <a href="#" className="hover:text-gray-500">Crockery</a>
        <a href="#" className="hover:text-gray-500">Tableware</a>
        <a href="#" className="hover:text-gray-500">Cutlery</a>
      </nav>

      {isMenuOpen && (
        <div className="bg-white text-black md:hidden">
        
          <div className="flex justify-end items-center space-x-4 py-4 px-6">
            <Image
              src="/Shopping--cart.png"
              width={16}
              height={16}
              alt="Shopping Cart"
              className="cursor-pointer"
            />
            <Image
              src="/User--avatar.png"
              width={16}
              height={16}
              alt="User Avatar"
              className="cursor-pointer"
            />
          </div>
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a href="#" className="hover:text-gray-500">Plant pots</a>
            <a href="#" className="hover:text-gray-500">Ceramics</a>
            <a href="#" className="hover:text-gray-500">Tables</a>
            <a href="#" className="hover:text-gray-500">Chairs</a>
            <a href="#" className="hover:text-gray-500">Crockery</a>
            <a href="#" className="hover:text-gray-500">Tableware</a>
            <a href="#" className="hover:text-gray-500">Cutlery</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
