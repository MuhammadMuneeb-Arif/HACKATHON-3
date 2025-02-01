import React from "react";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col md:flex-row w-full h-auto justify-between items-center px-4 md:px-8 lg:px-16 py-8">
        <div className="md:w-2/4 text-lg sm:text-xl md:text-2xl text-center md:text-left text-[#2A254B]">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className=" bg-[#F9F9F926] border border-white" >
           
          <Link
              href="./productlistings"
              className=" bg-gray-950 border border-black text-white py-3 px-8 rounded-md hover:bg-white hover:text-[#2A254B] transition duration-300"
            >
           View our products
            </Link> 
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-12 lg:py-16 space-y-8 md:space-y-0">
        <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-6 md:p-10 lg:p-16">
          <h1 className="text-lg sm:text-xl md:text-2xl">
            It started with a small idea
          </h1>
          <p className="mt-4 lg:mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-8 lg:mt-10 text-white hover:bg-opacity-80">
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

      <div className="flex flex-col md:flex-row w-full h-auto items-center px-4 py-12 lg:py-16 space-y-8 md:space-y-0">
        <Image
          src="/Image.png"
          alt="Service"
          width={720}
          height={603}
          className="w-full md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
        />
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-6 md:p-10 lg:p-16">
          <h1 className="text-lg sm:text-xl md:text-2xl text-[#2A254B]">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-[#2A254B] mt-4 lg:mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-8 lg:mt-10 text-[#2A254B] hover:bg-gray-100">
            Get in Touch
          </button>
        </div>
      </div>

      <section className="bg-white py-12 lg:py-16 px-6 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10 lg:mb-14" style={{ fontFamily: "'Clash Display', sans-serif" }}>
            What makes our brand different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image src="/Delivery.png" width={24} height={24} alt="Next day delivery" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Next day as standard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/Checkmark--outline.png" width={24} height={24} alt="Made by artisans" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Made by true artisans
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/Purchase.png" width={24} height={24} alt="Unbeatable prices" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Unbeatable prices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For our materials and quality, you won’t find better prices anywhere.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/Sprout.png" width={24} height={24} alt="Recycled packaging" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-4 mb-3" style={{ fontFamily: "'Clash Display', sans-serif" }}>
                Recycled packaging
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use 100% recycled packaging to ensure our footprint is manageable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 lg:w-4/5 bg-white p-6 md:p-10 lg:p-16">
          <h1 className="text-[#2A254B] text-xl md:text-2xl lg:text-3xl text-center">
            Join the club and get the benefits
          </h1>
          <p className="text-[#2A254B] text-center mt-4 lg:mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="bg-gray-100 w-72 md:w-80 lg:w-96 h-12 p-4 rounded-sm"
            />
            <button className="bg-[#2A254B] h-12 w-32 rounded-sm text-white hover:bg-[#231f3f]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
