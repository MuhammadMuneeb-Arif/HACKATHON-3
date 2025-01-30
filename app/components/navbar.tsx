"use client";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { CategoryQuery } from "../../scripts/sanityClient";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CategoryNames, setCategoryNames] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await CategoryQuery();
        const mappedCategories = data.map((category: any) => category.name);
        setCategoryNames(mappedCategories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image src="/Avion.png" alt="Logo" width={65} height={30} />
          </Link>
        </div>

        {/* Left Icons (Search) */}
        <div className="flex items-center absolute left-6">
          <Image src="/Search.png" width={20} height={20} alt="Search Icon" />
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-6 ml-auto">
          <Link href="/shoppingbasket">
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
          className="text-2xl lg:hidden ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden lg:flex items-center justify-center gap-6 py-4">
        <nav className="flex items-center justify-center gap-6 text-sm md:text-base font-medium">
          <Link href="./about" className="hover:text-gray-500">
            About
          </Link>
          <Link href="./home" className="hover:text-gray-500">
            Home
          </Link>
          <Link href="./home2" className="hover:text-gray-500">
            Home 2
          </Link>
          <Link href="./productdetail" className="hover:text-gray-500">
            Product Detail
          </Link>
          <Link href="./productlistings" className="hover:text-gray-500">
            Product Listings
          </Link>
          <Link href="./shoppingbasket" className="hover:text-gray-500">
            Shopping Basket
          </Link>
        </nav>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="bg-white text-black md:hidden shadow-md">
          <div className="flex justify-end items-center space-x-4 py-4 px-6">
            <Link href="/shoppingbasket">
              <Image
                src="/Shopping--cart.png"
                width={20}
                height={20}
                alt="Cart"
                className="cursor-pointer"
              />
            </Link>
            <Link href="/auth">
              <Image
                src="/User--avatar.png"
                width={20}
                height={20}
                alt="User"
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link href="./about" className="hover:text-gray-500">
              About
            </Link>
            <Link href="./home" className="hover:text-gray-500">
              Home
            </Link>
            <Link href="./home2" className="hover:text-gray-500">
              Home 2
            </Link>
            <Link href="./productdetail" className="hover:text-gray-500">
              Product Detail
            </Link>
            <Link href="./productlistings" className="hover:text-gray-500">
              Product Listings
            </Link>
            <Link href="./shoppingbasket" className="hover:text-gray-500">
              Shopping Basket
            </Link>
          </nav>

          {/* Mobile Categories */}
          <div className="py-4">
            <h3 className="text-center font-bold text-lg">CATEGORIES</h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {CategoryNames.map((categoryName, index) => (
                <div
                  key={index}
                  className="category-item cursor-pointer hover:text-gray-500 text-center p-2 bg-gray-100 rounded-lg"
                >
                  {categoryName}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
