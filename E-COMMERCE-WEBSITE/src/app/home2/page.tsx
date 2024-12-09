import Footer2 from "@/components/footer2";
import Navbar1 from "@/components/navbar1";
import Image from "next/image";

import ProductCard from "../../components/products";

const products = [
  { id: 1, name: "Image 1", image: "/Parent.png", price: "£19.99" },
  { id: 2, name: "Image 2", image: "/Parent (1).png", price: "£9.99" },
  { id: 3, name: "Image 3", image: "/Parent (2).png", price: "£29.99" },
  { id: 4, name: "Image 4", image: "/Parent (3).png", price: "£29.95" },
];

export default function HeroBanner() {
  return (
    <div>
      <Navbar1 />
      <div>
        <Image
          src="/Hero Blocks.png"
          width={1440}
          height={704}
          alt="image
        "
        />
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-center">
                            {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#"
                className="w-[342px] h-[42px] px-6 py-3 bg-[#F9F9F9] md:w-[170px] md:h-[56px] lg:w-[170px] lg:h-[56px] xl:w-[170px] xl:h-[56px] text-black rounded-lg border border-black transition duration-300"
              >
                View Collection
              </a>
            </div>
          </div>
        </section>
        <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16 ">
          <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
            <h1 className="text-xl md:text-2xl">
              It started with a small idea
            </h1>
            <p className="mt-6">
              A global brand with local beginnings, our story began in a small
              studio in South London in early 2014.
            </p>
            <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
              View Collection
            </button>
          </div>
          <div className="w-full md:w-2/5">
            <Image
              src="/image Block.png"
              alt="About main"
              width={630}
              height={478}
              className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
            />
          </div>
        </div>
        <div className="w-full h-auto bg-gray-100 py-8 ">
          <Image
            src="/Email sign-up.png"
            width={1440}
            height={704}
            alt="image"
          />
        </div>

        <Footer2 />
      </div>
    </div>
  );
}
