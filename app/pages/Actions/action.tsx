import { Products } from "../../../types/products2";
import Cart from "../shoppingbasket/page";

export const addToCart = (product: Products) => {
  const cart: Products[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProductIndex = cart.findIndex((item) => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].inventory = (cart[existingProductIndex].inventory || 0) + 1;
  } else {
    cart.push({
      ...product,
      inventory: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (productId: string) => {
  let cart: Products[] = JSON.parse(localStorage.getItem("cart") || "[]");

  const productIndex = cart.findIndex((item) => item.id === productId);

  if (productIndex > -1) {
    if (cart[productIndex].inventory > 1) {
      // Reduce the quantity if more than 1
      cart[productIndex].inventory -= 1;
    } else {
      // Remove the product if only 1 remains
      cart = cart.filter((item) => item.id !== productId);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Products[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productIndex = cart.findIndex((item) => item.id === productId);

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
  }
};
export const getCartItems = (): Products[] => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
};
