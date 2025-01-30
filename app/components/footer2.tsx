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
    <div className="px-4 sm:px-6 lg:px-12 py-8 bg-[#2A254B] mt-8 w-full">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
    {/* Menu Section */}
    <div className="text-white">
      <h1 className="text-sm lg:text-lg font-bold mb-4">Menu</h1>
      <ul className="space-y-2 text-xs lg:text-sm">
        {["New arrivals", "Best sellers", "Recently viewed", "Popular this week", "All products"].map((item, index) => (
          <li key={index}>
            <Link href="/" className="hover:text-gray-400">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Categories Section */}
    <div className="text-white">
      <h1 className="text-sm lg:text-lg font-bold mb-4">Categories</h1>
      <ul className="space-y-2 text-xs lg:text-sm">
        {["Crockery", "Furniture", "Homeware", "Plant pots", "Chairs"].map((item, index) => (
          <li key={index}>
            <Link href="/" className="hover:text-gray-400">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Our Company Section */}
    <div className="text-white">
      <h1 className="text-sm lg:text-lg font-bold mb-4">Our company</h1>
      <ul className="space-y-2 text-xs lg:text-sm">
        {["About us", "Vacancies", "Contact us", "Privacy", "Returns policy"].map((item, index) => (
          <li key={index}>
            <Link href="/" className="hover:text-gray-400">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Join Mailing List Section */}
    <div className="text-white">
      <h1 className="text-sm lg:text-lg font-bold mb-4">Join our mailing list</h1>
      <form className="flex ">
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full h-[48px] px-3 bg-[#FFFFFF26] text-white border border-[#4E4D93]  text-xs lg:text-sm placeholder-gray-400 focus:outline-none"
        />
        <button className="w-full lg:w-[100px] h-[48px] bg-white text-[#2A254B] text-xs lg:text-sm ">
          Sign up
        </button>
      </form>
    </div>
  </div>

  {/* Divider */}
  <hr className="bg-[#4E4D93] my-8" />

  {/* Footer Bottom */}
  <div className="flex flex-col lg:flex-row justify-between items-center text-white text-xs lg:text-sm gap-4">
    <p className="text-center lg:text-left">Copyright 2022 Avion LTD</p>
    <div className="flex gap-4">
      {[
        { href: "#", icon: <FaLinkedinIn size={16} /> },
        { href: "#", icon: <FaFacebook size={16} /> },
        { href: "#", icon: <FaInstagram size={16} /> },
        { href: "#", icon: <FaSkype size={16} /> },
        { href: "#", icon: <FaTwitter size={16} /> },
        { href: "#", icon: <FaPinterest size={16} /> },
      ].map((social, index) => (
        <a key={index} href={social.href} className="hover:text-gray-400">
          {social.icon}
        </a>
      ))}
    </div>
  </div>
</div>

  );
};

export default Footer;
