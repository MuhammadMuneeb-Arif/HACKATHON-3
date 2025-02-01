"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="p-4 w-full h-auto">
      <div className="flex justify-between items-center py-2">
        <div className="sm:hidden hidden md:block">
          <CiSearch size={25} className="text-[#2A254B]" />
        </div>

        <h1 className="text-[#22202E] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          Avion
        </h1>

        <div className="hidden lg:flex gap-4">
          <Link href="./pages/shoppingbasket">
            <IoCartOutline size={25} className="text-[#2A254B]" />
          </Link>
          <Link href="/auth">
          <IoIosContact size={25} className="text-[#2A254B]" />
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          
          <CiSearch size={25} className="text-[#2A254B]" />
          <button
            className="text-2xl focus:outline-none z-30"
            onClick={toggleMenu}
          >
            {!menuOpen ? <IoMenu /> : <IoClose />}
          </button>
        </div>
      </div>

      <hr />

      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none z-20`}
      >
        <nav className="flex md:flex-row flex-col items-center justify-center gap-4">
          <Link href="/pages/home" className="hover:text-gray-500 md:mx-1">
            Home
          </Link>
          <Link href="/pages/home2" className="hover:text-gray-500 md:mx-1">
           HOME 2
          </Link>
          <Link href="/pages/about" className="hover:text-gray-500 md:mx-1">
            ABOUT US
          </Link>
          <Link href="/pages/contactus" className="hover:text-gray-500 md:mx-1">
            CONTACT US
          </Link>
          <Link href="/pages/policy" className="hover:text-gray-500 md:mx-1">
           PRIVACY POLICY
          </Link>
          <Link href="/pages/productdetail" className="hover:text-gray-500 md:mx-1">
            PRODUCT DETAILS
          </Link>
          <Link href="/pages/productlistings" className="hover:text-gray-500 md:mx-1">
            PRODUCT LISTINGS 
             </Link>
          <Link href="/pages/shoppingbasket" className="hover:text-gray-500 md:mx-1">
          SHOPPING BASKET 
             </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
