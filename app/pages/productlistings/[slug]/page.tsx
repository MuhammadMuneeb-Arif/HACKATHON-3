"use client"
import { createClient } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import Quantity from "../../../components/quantity";
import { addToCart } from "../../Actions/action";
import Header from "../../../components/navbar"
import Swal from "sweetalert2";

interface Product {
  name: string;
  price: string;
  imageUrl: string;
  quantity: number;
  description: string;
}
const handleAddToCart = (e: React.MouseEvent, product: any) => {
  e.preventDefault();
  Swal.fire({
    position: "center",
    icon: "success",
    title: `${product.name} added to Cart`,
    showConfirmButton: false,
    timer: 1000,
  });
  addToCart(product);
};

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
    notFound(); // Redirect to 404 page if product not found
  }
  console.log(params);

  return (
    <div>
<Header/>
    
    <div className="px-4 md:px-8 lg:px-12 py-4 md:py-12">
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
            <button onClick={(e) => handleAddToCart(e, product)} className="mt-6 w-full md:w-auto bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row gap-6 mt-12 text-sm md:text-base">
                  {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className="flex flex-col md:w-1/4 p-4 rounded-lg"
                      >
                        <Icon size={30} className="text-[#2A254B]" />
                        <p className="py-4 font-semibold">{feature.title}</p>
                        <p>{feature.description}</p>
                      </div>
                    );
                  })}
                </div> */}
    </div>
    </div>
  );
}
