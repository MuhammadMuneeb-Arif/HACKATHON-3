import { createClient } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "../../../sanity/lib/client";
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
    notFound(); // Redirect to 404 page if product not found
  }
  console.log(params);

  return (
    <div className="px-4 md:px-8 lg:px-12 py-4 md:py-12">
      <div className="flex flex-col md:flex-row gap-8 items-center px-4 md:px-8 lg:px-12 py-4 md:py-12">
        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full h-[300px] md:h-auto">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={800}
              height={500}
              className="rounded-md object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 px-4 md:px-10 py-3 flex flex-col justify-center">
          {/* Product Name & Price */}
          <div className="mb-4">
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              {product.name}
            </p>
            <p className="py-2 text-lg md:text-xl text-gray-600">
            £{product.price}
            </p>
          </div>

          {/* Description */}
          <div className="text-gray-600 text-sm md:text-base">
            <h2 className="font-semibold text-gray-800">Description</h2>
            <p className="my-4 md:my-6">{product.description}</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Timeless classic design</li>
            </ul>
          </div>

          {/* Dimensions Section */}
          <div className="my-8">
            <h2 className="font-semibold text-gray-800">Dimensions</h2>
            <div className="flex gap-12 md:gap-20 text-sm md:text-base mt-4">
              <div>
                <h3 className="font-medium">Height</h3>
                <p>110cm</p>
              </div>
              <div>
                <h3 className="font-medium">Width</h3>
                <p>75cm</p>
              </div>
              <div>
                <h3 className="font-medium">Depth</h3>
                <p>50cm</p>
              </div>
            </div>
          </div>

          {/* Quantity Selector & Add to Cart */}
          <div className="flex flex-wrap justify-between items-center mt-8">
            <Quantity block={"flex "} />
            <button className="w-full md:w-[146px] h-[56px] bg-indigo-600 text-white mt-4 md:mt-0 rounded-md hover:bg-indigo-700">
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
  );
}
