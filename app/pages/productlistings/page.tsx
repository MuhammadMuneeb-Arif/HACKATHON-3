"use client";

import React, { useEffect, useState } from "react";
import Header from "../../components/navbar";
import Image from "next/image";
import ProductCard from "../../components/products";
import {
  CategoryQuery,
  getAll,
  getItemsByCategory,
} from "../../../scripts/sanityClient";
import Products from "../../../types/products";
import AddToCartButton from "../../components/addtocard"; // Keep AddToCartButton as a separate component

const Productlistings: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [CategoryNames, setCategoryNames] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryItems, setCategoryItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getAll();
        const mappedProducts = data.map((product: any) => ({
          id: product._id,
          name: product.name,
          price: product.price.toString(),
          imageUrl: product.imageUrl,
          slug: product.slug,
          quantity: product.quantity,
        }));
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await CategoryQuery();
        setCategoryNames(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchItems() {
      if (!selectedCategory) return;
      try {
        setLoading(true);
        const itemsData = await getItemsByCategory(selectedCategory);
        setCategoryItems(itemsData);
      } catch (error) {
        console.error("Failed to fetch items for category:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-4">
        <h3 className="text-center font-bold text-lg">CATEGORIES</h3>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {CategoryNames.length > 0 ? (
            CategoryNames.map((cat, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(cat._id)}
                className={`cursor-pointer hover:text-gray-500 text-center p-2 bg-gray-100 rounded-lg ${
                  selectedCategory === cat._id ? "bg-gray-300" : ""
                }`}
              >
                {cat?.name}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Loading categories...</p>
          )}
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="w-full h-auto">
          <Image
            src="/FRAME 143.png"
            width={1440}
            height={209}
            alt="hero section"
          />
          <Image src="/Filters.png" width={1440} height={64} alt="Filters" />
        </div>

        {selectedCategory ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">
              Items in{" "}
              {CategoryNames.find((c) => c._id === selectedCategory)?.name ||
                "Selected Category"}
            </h2>
            {loading ? (
              <p className="text-center text-gray-500">Loading items...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categoryItems.length > 0 ? (
                  categoryItems.map((item) => (
                    <div
                      key={item._id}
                      className="p-4  rounded-lg shadow-md"
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.name }
                        width={250}
                        height={250}
                        className="w-full h-64 object-cover rounded-md"
                      />
                      <h3 className="text-lg font-semibold mt-4">
                        {item.name }
                      </h3>
                      <p className="text-xl font-bold mt-2">
                        £{item.price}
                      </p>
                     
                      <AddToCartButton product={item} />
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No items available.
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center mb-6">
              All Products
            </h2>
            {loading ? (
              <p className="text-center text-gray-500">Loading products...</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12">
                {products.length > 0 ? (
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <p className="text-center text-gray-500">
                    No products available.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Productlistings;
