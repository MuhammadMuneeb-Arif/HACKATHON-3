"use client";

import React, { useEffect, useState } from "react";

import Header from "../../components/navbar";
import Image from "next/image";
import ProductCard from "../../components/products";
import { getAll } from "../../../scripts/sanityClient";
import Products from "../../../types/products";

const productdetails: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getAll();
        const mappedProducts = data.map((product: any) => ({
          id: product._id,
          name: product.name,
          price: product.price.toString(),
          image: product.imageUrl,
          slug: product.slug, // Include slug here
          quantity: product.quantity,
        }));
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen ">
      <Header />
      <div className="w-full h-auto">
        <Image
          src="/FRAME 143.png"
          width={1440}
          height={209}
          alt="hero section"
        />
        <Image src="/Filters.png" width={1440} height={64} alt="hero section" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default productdetails;
