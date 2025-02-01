"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { CategoryQuery, getItemsByCategory } from "../../scripts/sanityClient"; // Make sure to import the Item fetching function
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fetch categories

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-md top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image src="/Avion.png" alt="Logo" width={65} height={30} />
          </Link>
        </div>

        {/* Left Icons (Search) */}
        <div className="flex items-center lg:hidden">
          <Image src="/Search.png" width={20} height={20} alt="Search Icon" />
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          <Link href="/pages/shoppingbasket">
            <Image
              src="/Shopping--cart.png"
              width={24}
              height={24}
              alt="Cart"
              className="cursor-pointer"
            />
          </Link>
          <Link href="/auth">
            <Image
              src="/User--avatar.png"
              width={24}
              height={24}
              alt="User"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl lg:hidden ml-auto focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden lg:flex flex-col items-center gap-4 py-4">
        <nav className="flex items-center justify-center gap-6 text-sm md:text-base font-medium">
          {[
            "Home",
            "Home 2",
            "About",
            "Contactus",
            "Product Detail",
            "Product Listings",
            "Shopping Basket",
          ].map((item) => (
            <Link
              key={item}
              href={`./${item.toLowerCase().replace(/ /g, "")}`}
              className="hover:text-gray-500"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu (Slide-in) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-md transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-40 lg:hidden`}
      >
        <button
          className="absolute top-4 right-6 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        <nav className="flex flex-col items-center gap-6 mt-16 text-lg">
          {[
            "About",
            "Home",
            "Home 2",
            "Product Detail",
            "Product Listings",
            "Shopping Basket",
          ].map((item) => (
            <Link
              key={item}
              href={`./${item.toLowerCase().replace(/ /g, "")}`}
              className="hover:text-gray-500"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
