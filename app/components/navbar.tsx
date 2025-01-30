"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-col gap-5 py-4">
        <nav className="flex items-center justify-center gap-4  ">
          <Link href="./about" className="hover:text-gray-500 ">
            About
          </Link>
          <Link href="./home" className="hover:text-gray-500 ">
            HOME 
          </Link>
    
          <Link href="./home2" className="hover:text-gray-500 ">
            HOME 2
          </Link>
          <Link href="./productdetail" className="hover:text-gray-500 ">
            PRODUCT DETAIL
          </Link>
          <Link href="./productlistings" className="hover:text-gray-500 ">
            PRODUCT LISTINGS
          </Link>
          <Link href="./shoppingbasket" className="hover:text-gray-500 ">
          SHOPPING BASKET
          </Link>
       
        </nav>
        <nav className="flex items-center justify-center gap-4  ">
          <Link href="./about" className="hover:text-gray-500">
            Plant pots
          </Link>
          <Link href="./home2" className="hover:text-gray-500">
            Ceramics
          </Link>
          <Link href="./productdetail" className="hover:text-gray-500">
            Tables
          </Link>
          <Link href="./productdetails" className="hover:text-gray-500">
            Chairs
          </Link>
          <Link href="./" className="hover:text-gray-500">
            Crockery
          </Link>
          <Link href="#" className="hover:text-gray-500">
            Tableware
          </Link>
          <Link href="#" className="hover:text-gray-500">
            Cutlery
          </Link>
        </nav>
      </div>
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
          <nav className="flex items-center justify-center gap-4  ">
            <Link href="./about" className="hover:text-gray-500">
              Plant pots
            </Link>
            <Link href="../app/home2" className="hover:text-gray-500">
              Ceramics
            </Link>
            <Link href="../app/productdetail" className="hover:text-gray-500">
              Tables
            </Link>
            <Link href="../app/productdetails" className="hover:text-gray-500">
              Chairs
            </Link>
            <Link href="../app/" className="hover:text-gray-500">
              Crockery
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Tableware
            </Link>
            <Link href="#" className="hover:text-gray-500">
              Cutlery
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
