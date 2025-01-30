import {
  FaFacebook,
  FaLinkedinIn,
  FaSkype,
  FaPinterest,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2A254B] text-white py-10 px-6 md:px-20 lg:px-32 xl:px-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
         
          <div>
            <h3 className="text-lg font-bold mb-3">Avion</h3>
            <p className="text-sm">
              21 New York Street<br />
              New York City<br />
              United States of America<br />
              432 34
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Social Links</h3>
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

          {/* Menu */}
          <div>
            <h3 className="text-lg font-bold mb-3">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/productlistings" className="hover:text-blue-400">
                  New arrivals
                </a>
              </li>
              <li>
                <a href="/productlistings" className="hover:text-blue-400">
                  Best sellers
                </a>
              </li>
              <li>
                <a href="/productlistings" className="hover:text-blue-400">
                  Recently viewed
                </a>
              </li>
              <li>
                <a href="/productlistings" className="hover:text-blue-400">
                  Popular this week
                </a>
              </li>
              <li>
                <a href="/productlistings" className="hover:text-blue-400">
                  All products
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Crockery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Homeware
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Plant pots
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Chairs
                </a>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-lg font-bold mb-3">Our Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-blue-400">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Vacancies
                </a>
              </li>
              <li>
                <a href="./contactus" className="hover:text-blue-400">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/policy" className="hover:text-blue-400">
                  Returns policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center">
          <p className="text-sm">&copy; 2022 Avion LTD</p>
        </div>
      </div>
    </footer>
  );
}
