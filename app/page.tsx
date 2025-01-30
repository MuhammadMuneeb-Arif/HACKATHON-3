// // src/pages/products.tsx
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// interface Product {
  
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// }

// const ProductsPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://hackathon-apis.vercel.app/api/products");
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (isLoading) {
//     return <p className="text-center text-xl py-8">Loading products...</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-center py-8">Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
//         {products.map((products:any) => (
//           <div
//             key={products.name}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <Link href={`../${products.name}`}>
//               <img
//                 src={products.image}
//                 alt={`Image of ${products.name}`}
//                 className="h-48 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="text-lg font-semibold">{products.name}</h2>
//                 <p className="text-gray-500">{products.description}</p>
//                 <div className="mt-2">
//                   <span className="text-xl font-bold">${products.price}</span>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;
