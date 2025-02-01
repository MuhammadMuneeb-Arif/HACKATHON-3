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
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={600}
              className="rounded-md object-contain h-52 md:h-96 w-auto"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 px-4 md:px-6">
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-2">£{product.price}</p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <ul className="list-disc ml-4 mt-4 space-y-1">
              <li>Premium material</li>
              <li>Handmade craftsmanship</li>
              <li>Classic timeless design</li>
            </ul>
            <Quantity />
            <button className="mt-6 w-full md:w-auto bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <h1 className="text-xl md:text-2xl font-semibold text-[#505977] text-center md:text-left">
          You might also like
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {["Parent", "Parent (1)", "Parent (2)", "Parent (3)"].map((item, idx) => (
            <div key={idx} className="w-full flex flex-col items-center">
              <Image
                src={`/${item}.png`}
                height={700}
                width={700}
                alt={item}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="mt-4 text-[#2A254B] text-center">
                <p className="py-2 font-medium">
                  {item === "Parent" ? "The Dendy Chair" : `The ${item}`}
                </p>
                <p className="font-semibold">$
                  {item === "Parent" ? 250 : item === "Parent (1)" ? 155 : 125}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 flex justify-center">
          <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B] hover:bg-gray-200 transition">
            View collection
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-12 bg-[#F9F9F9] text-[#2A254B] mt-12 px-4">
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto bg-white py-10 px-6 md:px-12 text-center rounded-md">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Join the club and get the benefits
          </h1>
          <h2 className="py-4 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </h2>
          <form className="mt-4 flex flex-col md:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="your@email.com"
              className="p-4 bg-[#F9F9F9] w-full md:w-2/3 h-12 outline-none rounded-md"
            />
            <button className="p-3 bg-[#2A254B] text-white w-full md:w-auto h-12 rounded-md">
              Signup
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
