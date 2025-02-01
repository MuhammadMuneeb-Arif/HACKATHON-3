"use strict";
// import { createClient } from 'next-sanity';
// const { createClient } = require('@sanity/client');

// const sanityClient = createClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET|| 'production',
//     apiVersion: '2023-01-01', // Use the current date for latest API version
//     useCdn: true, // Use the CDN for faster queries
// });

// export default sanityClient;

// "use strict";
// sanity/lib/queries.ts

import { createClient, defineQuery } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-01-01", // Make sure the version is correct or set to a valid date.
});

export default client;

// GROQ query to fetch items based on the selected category
export const getItemsByCategory = async (selectedCategory) => {
  console.log("slug: ", selectedCategory);

  // Define your GROQ query with a parameter
  const query = `
    *[_type == "product" && category._ref == $selectedCategory] {
      _id,
      name,
      price,
      "imageUrl": image.asset->url,
      description
    }
  `;

  // Run the query with the dynamic parameter (selectedCategory)
  const result = await client.fetch(query, { selectedCategory });

  console.log("category: ", result);
  return result;
};


export const getAll = async () => {
  const products = await client.fetch(
    `*[_type == "product"]{
      _id,
      name,
      price,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      quantity
    }`
  );

  return products;
};

export const CategoryQuery = async () => {
  const CategoryNames = await client.fetch(`
    *[_type == "category"] {
    _id,
     name,  
    }
  `);
  return CategoryNames;
};
export const particularCategory = async () => {
  const CategoryNames = await client.fetch(`
    *[_type == "category"] {
     name,  
    }
  `);
  return CategoryNames;
};
