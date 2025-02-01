import { notFound } from "next/navigation";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import Navbar from "../../../components/navbar2";
import Footer from "../../../components/footer";
import Quantity from "../../../components/quantity";

interface Product {
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
  description: string;
}

async function getProduct(slug: string): Promise<Product | null> {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      price,
      "imageUrl": image.asset->url,
      quantity,
      description
    }`,
    { slug }
  );
  return product || null;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound(); // Redirects to 404 if the product isn't found
  }

  return (
    <>
      <div>
        <div>
          <Navbar />
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Image Section */}
            <div className="w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={800}
                height={300}
                className="rounded-md object-contain h-48 md:h-96"
              />
            </div>

            {/* Details Section */}
            <div className="w-full md:w-1/2 px-4 md:px-10">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                {product.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mt-2">
              £{product.price}
              </p>
              <p className="text-gray-600 mt-6">{product.description}</p>
              <ul className="list-disc ml-4 mt-4">
                <li>Premium material</li>
                <li>Handmade craftsmanship</li>
                <li>Classic timeless design</li>
              </ul>

              <Quantity/>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
            <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">
              You might also like
            </h1>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                         {["Parent", "Parent (1)", "Parent (2)", "Parent (3)"].map(
                           (item, idx) => (
                             <div key={idx} className="w-full">
                               <Image
                                 src={`/${item}.png`}
                                 height={700}
                                 width={700}
                                 alt={item}
                                 className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                               />
                               <div className="mt-4 text-[#2A254B]">
                                 <p className="py-2">
                                   {item === "Parent" ? "The Dendy Chair" : `The ${item}`}
                                 </p>
                                 <p>
                                   $
                                   {item === "Parent"
                                     ? 250
                                     : item === "Parent (1)"
                                       ? 155
                                       : 125}
                                 </p>
                               </div>
                             </div>
                           )
                         )}
                       </div>

            <div className="my-10 flex justify-center">
              <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
                View collection
              </button>
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
                      Order before 3pm and get your order the next day as
                      standard.
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
                      For our materials and quality, you won’t find better
                      prices anywhere.
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
          </div>
        </div>
        <div>
          <div className="py-12 bg-[#F9F9F9] text-[#2A254B] mt-12">
            <div className="w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-white mx-auto flex justify-center items-center flex-col px-4">
              <h1 className="text-2xl md:text-4xl text-center">
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
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
