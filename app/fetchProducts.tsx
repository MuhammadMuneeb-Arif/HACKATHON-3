// src/utils/fetchProducts.ts
export const fetchProducts = async () => {
    try {
      const response = await fetch("https://hackathon-apis.vercel.app/api/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };
  