"use client";
import Image from "next/image";

import ProductCard from "../../components/products";

import Footer from "../../components/footer2";
import Navbar from "../../components/navbar1";
import Link from "next/link";

const products = [
  { id: 1, name: "The Dandy Chair", imageUrl: "/Parent.png", price: "250", slug: "the-dandy-chair" },
  { id: 2, name: "Rustic Vase Set", imageUrl: "/Parent (1).png", price: "155", slug: "rustic-vase-set" },
  { id: 3, name: "Retro Vibe", imageUrl: "/pic.png", price: "340", slug: "retro-vibe" },
  { id: 4, name: "The Lucky Lamp", imageUrl: "/Parent (3).png", price: "399", slug: "the-lucky-lamp" },
];

const HeroSection = () => {
  return (
    <div>
      
      <div className="w-full mx-auto  bg-white">
        <Navbar />
        <br />
        <section className="bg-[#2A254B] text-white w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center">
          <div className="flex-1 px-6 lg:px-20 py-12 space-y-8 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-light leading-snug"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              The furniture brand for the future, with timeless designs
            </h2>
            <Link
              href="/pages/productlistings"
              className="hidden lg:inline-block bg-[#F9F9F926] border border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-[#2A254B] transition duration-300"
            >
              View collection
            </Link>
            <p
              className="text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-[600px] mx-auto lg:mx-0"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              A new era in eco-friendly furniture with Avion, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
            <a
              href="#"
              className="inline-block lg:hidden bg-[#F9F9F926] border border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-[#2A254B] transition duration-300"
            >
              View collection
            </a>
          </div>
          <div className="hidden md:block lg:block xl:block">
            <Image
              src="/Right Image.png"
              alt="Modern Chair"
              width={520}
              height={584}
              className="rounded-md mx-auto lg:mx-0"
            />
          </div>
        </section>

        <section className="bg-white py-16 lg:py-20 px-8 lg:px-28">
          <div className="max-w-[1440px] mx-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12 lg:mb-16"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              What makes our brand different
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/Delivery.png"
                  width={24}
                  height={24}
                  alt="Next day delivery"
                />
                <h3
                  className="text-xl font-semibold text-gray-800 mt-4 mb-3"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  Next day as standard
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Order before 3pm and get your order the next day as standard.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/Checkmark--outline.png"
                  width={24}
                  height={24}
                  alt="Made by artisans"
                />
                <h3
                  className="text-xl font-semibold text-gray-800 mt-4 mb-3"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  Made by true artisans
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Handmade crafted goods made with real passion and
                  craftsmanship.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/Purchase.png"
                  width={24}
                  height={24}
                  alt="Unbeatable prices"
                />
                <h3
                  className="text-xl font-semibold text-gray-800 mt-4 mb-3"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  Unbeatable prices
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  For our materials and quality, you won’t find better prices
                  anywhere.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/Sprout.png"
                  width={24}
                  height={24}
                  alt="Recycled packaging"
                />
                <h3
                  className="text-xl font-semibold text-gray-800 mt-4 mb-3"
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  Recycled packaging
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We use 100% recycled packaging to ensure our footprint is
                  manageable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4 lg:px-20">
          <div className="max-w-[1440px] mx-auto">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Featured Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product}  />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/pages/productlistings"
                className="w-[342px] h-[42px] px-6 py-3 bg-[#F9F9F9] md:w-[170px] md:h-[56px] lg:w-[170px] lg:h-[56px] xl:w-[170px] xl:h-[56px] text-black rounded-lg border border-black transition duration-300"
              >
                View Collection
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="px-8 py-12 text-[#2A254B] mt-12">
            
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Our popular products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product}/>
              </div>
            ))}
          </div>
            <div className="my-10 flex justify-center items-center">
            <Link
                href="./productlistings"
                className="w-[342px] h-[42px] px-6 py-3 bg-[#F9F9F9] md:w-[170px] md:h-[56px] lg:w-[170px] lg:h-[56px] xl:w-[170px] xl:h-[56px] text-black rounded-lg border border-black transition duration-300"
              >
                View Collection
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div className="py-12 bg-[#F9F9F9] text-[#2A254B] mt-12">
            <div className="w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-white mx-auto flex justify-center items-center flex-col px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">
                Join the club and get the benefits
              </h1>
              <h2 className="text-center py-4 text-sm md:text-base">
                Sign up for our newsletter and receive exclusive offers on new
                <br /> ranges, sales, pop-up stores, and more.
              </h2>
              <div className="mt-4 w-full">
                <form
                  action=""
                  className="flex flex-col md:flex-row items-center justify-center"
                >
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] outline-none mb-4 md:mb-0"
                  />
                  <button className="p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px]">
                    <Link href={"/auth"}>
                    Signup
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="py-12 text-[#2A254B] mt-12">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-[720px] h-auto px-4 md:px-12 py-8 flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl">
                    From a studio in London to a global brand with <br /> over
                    400 outlets
                  </h1>
                  <h1 className="py-6 text-lg md:text-xl">
                    When we started Avion, the idea was simple. Make
                    high-quality furniture <br />
                    affordable and available for the mass market.
                  </h1>
                  <h1 className="text-base md:text-lg">
                    Handmade and lovingly crafted furniture and homeware is what
                    we live, <br />
                    breathe, and design, so our Chelsea boutique became the
                    hotbed for the <br />
                    London interior design community.
                  </h1>
                </div>
                <div className="my-10">
                  <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] text-[#2A254B]">
                    Get in touch
                  </button>
                </div>
              </div>
              <div className="w-full md:w-[890px] h-auto">
                <Image
                  src={"/Image.png"}
                  height={800}
                  width={800}
                  alt="chair"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out "
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
