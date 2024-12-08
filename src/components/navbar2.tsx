"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full text-black bg-white items-center">

      <div className="flex justify-between items-center py-3 px-6 lg:px-12">
       
        <h1 className="text-xl font-bold">Avion</h1>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex gap-8 items-center">
          {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
            <li key={item} className="hover:underline">
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="hidden lg:flex gap-4 items-center">
          <CiSearch size={25} />
          <Link href="/Cart">
            <IoCartOutline size={25} />
          </Link>
          <IoIosContact size={25} />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center gap-4">
          <CiSearch size={25} />
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Bottom Bar for Announcement */}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-20">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-bold">Avion</h1>
            <button
              className="text-2xl text-white focus:outline-none"
              onClick={toggleMenu}
            >
              <IoClose />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-6 mt-12 text-lg">
            {["Plant pots", "Ceramics", "Tables", "Chairs", "Crockery", "Tableware", "Cutlery"].map((item) => (
              <li key={item}>
                <a href="/" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
