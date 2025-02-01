import React from "react";
import Products from "../../types/products";
import { addToCart } from "../pages/Actions/action";
import Swal from "sweetalert2";

interface AddToCartButtonProps {
  product: Products; 
}

const handleAddToCart = (e: React.MouseEvent, product: Products) => {
  console.log(product);
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

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  return (
    <button
      onClick={(e) => handleAddToCart(e, product)}
      className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
