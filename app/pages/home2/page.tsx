import Footer2 from "../../components/footer2";
import ProductCard from "../../components/products";
import Navbar1 from "../../components/navbar1";
import Image from "next/image";
import Link from "next/link";

const products = [
  { id: 1, name: "The Dandy Chair", imageUrl: "/Parent.png", price: "250", slug: "the-dandy-chair" },
  { id: 2, name: "Rustic Vase Set", imageUrl: "/Parent (1).png", price: "155", slug: "rustic-vase-set" },
  { id: 3, name: "Retro Vibe", imageUrl: "/pic.png", price: "340", slug: "retro-vibe" },
  { id: 4, name: "The Lucky Lamp", imageUrl: "/Parent (3).png", price: "399", slug: "the-lucky-lamp" },
];

export default function Home2() {
  return (
    <div>
      <Navbar1 />
      {/* Hero Banner */}
      <div className="relative">
        <Image
          src="/HeroBlocks.png"
          width={1440}
          height={704}
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>

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
     
      {/* Main Content */}
      <div className="bg-gray-50 py-16 px-4 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Discover Our Products
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">View Collection</button>
        </div>
        <div className="w-full md:w-2/5">
          <Image
            src="/imageBlock.png"
            alt="About main"
            width={630}
            height={478}
            className="w-full transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
          />
        </div>
      </div>

      {/* Footer Banner */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <Image src="/Email sign-up.png" width={1440} height={704} alt="Email sign-up" />
      </div>

      <Footer2 />
    </div>
  );
}
