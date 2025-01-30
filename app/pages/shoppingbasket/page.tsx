"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { getCartItems, removeFromCart, updateCartQuantity } from "../Actions/action";
import Swal from "sweetalert2";
import { Products } from "../../../types/products2";

const Cart = () => {
  const [cartItems, setCartItems] = useState<Products[]>([]);

  useEffect(() => {
    setCartItems(getCartItems() || []);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems() || []);
        Swal.fire("Removed!", "Item has been removed", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, inventory: quantity } : item
      )
    );
  };

  const handleIncrement = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, inventory: (item.inventory || 0) + 1 } : item
      )
    );
  };
  
  useEffect(() => {
    cartItems.forEach((item) => {
      updateCartQuantity(item.id, item.inventory || 0);
    });
  }, [cartItems]);

  const handleDecrement = (id: string) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id && (item.inventory || 0) > 1) {
          const newQuantity = (item.inventory || 0) - 1;
          handleQuantityChange(id, newQuantity);
          return { ...item, inventory: newQuantity };
        }
        return item;
      });
    });
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success", "Your order has been successfully processed", "success");
        setCartItems([]);
      }
    });
  };

  const subTotal = cartItems.reduce((acc, product) => acc + Number(product.price) * (product.inventory || 0), 0);

  return (
    <div>
      <Navbar />
      <div className="bg-[#F9F9F9] min-h-screen flex flex-col items-center py-10 px-6 sm:px-10 lg:px-40">
        <h1 className="text-3xl font-semibold text-custom-purple mb-8">Your Shopping Cart</h1>
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-6">
            {cartItems.map((product) => (
              <div key={product.id} className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 rounded-md shadow-sm"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-lg font-medium text-custom-purple">£{product.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrement(product.id)}
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border rounded-md">{product.inventory}</span>
                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-xl font-medium">Subtotal: £{subTotal}</h2>
            <p className="text-sm text-gray-600 mt-2">Taxes and shipping calculated at checkout</p>
            <button
              onClick={handleProceed}
              className="bg-[#2A254B] text-white px-6 py-3 rounded-md mt-4 w-full sm:w-auto hover:bg-[#1f1a3a]"
            >
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
