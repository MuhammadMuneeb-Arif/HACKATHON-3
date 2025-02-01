"use client";
import Link from "next/link";
import Product from "../../types/products";
import { addToCart } from "../pages/Actions/action";

import Swal from "sweetalert2";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/pages/productlistings/${product.slug}`}>
      <div className="bg-white hover:shadow-lg transition-shadow duration-300 h-full w-full flex flex-col cursor-pointer">
        <div className="w-full h-64 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
            className="!w-full !h-full !object-cover"
          />
        </div>

        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-800 truncate">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-2">
              £{product.price}
            </p>
          </div>

          <button
            onClick={(e) => handleAddToCart(e, product)}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
