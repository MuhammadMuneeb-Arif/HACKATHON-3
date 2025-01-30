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
import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

export default client;

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
