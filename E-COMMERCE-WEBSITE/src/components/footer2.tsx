import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedinIn,
  FaSkype,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-12 py-8 bg-[#2A254B] mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-24">
        <div className="text-white">
          <h1 className="text-lg md:text-xl font-bold">Menu</h1>
          <div className="space-y-2">
            <h1>
              <Link href="/">New Arrivals</Link>
            </h1>
            <h1>
              <Link href="/">Best Sellers</Link>
            </h1>
            <h1>
              <Link href="/">Recently Viewed</Link>
            </h1>
            <h1>
              <Link href="/">Popular This Week</Link>
            </h1>
            <h1>
              <Link href="/">All Products</Link>
            </h1>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-lg md:text-xl font-bold">Categories</h1>
          <div className="space-y-2">
            <h1>
              <Link href="/">Crockery</Link>
            </h1>
            <h1>
              <Link href="/">Furniture</Link>
            </h1>
            <h1>
              <Link href="/">Homeware</Link>
            </h1>
            <h1>
              <Link href="/">Plant Pots</Link>
            </h1>
            <h1>
              <Link href="/">Chairs</Link>
            </h1>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
          <div className="space-y-2">
            <h1>
              <Link href="/about">About Us</Link>
            </h1>
            <h1>
              <Link href="/">Vacancies</Link>
            </h1>
            <h1>
              <Link href="/">Contact Us</Link>
            </h1>
            <h1>
              <Link href="/">Privacy</Link>
            </h1>
            <h1>
              <Link href="/">Return Policy</Link>
            </h1>
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="your@email.com"
              className="w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-[#FFFFFF26] opacity-35 border border-white rounded-md"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <hr className="bg-[#4E4D93] my-8" />

      <div className="flex flex-col justify-between text-white gap-4">
        <div>
          <h1>Copyright 2022 Avion LTD</h1>
          <div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-gray-400">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaSkype size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
