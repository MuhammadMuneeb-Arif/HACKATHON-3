// src/queries.ts

import { defineQuery } from "next-sanity";
import client from "../../../scripts/sanityClient"
export const productQuery = `
  *[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    price,
    quantity,
    "category": category->name,
    tags,
    "imageUrl": image.asset->url,
    description,
    features,
    dimensions {
      width,
      height,
      depth
    }
  }
`;

export const getAll = async () => {
  const SINGLE_EVENTS_QUERY = defineQuery(productQuery);

  const produts = await client.fetch(SINGLE_EVENTS_QUERY);

  return produts;
};

export const CategoryQuery = `
  
   *[_type == "product"] {
     
     "category": category->name,
    
  }
`;



export const productsByCategoryQuery = `
  *[_type == "product" && category._ref == $categoryId] {
    _id,
    name,
    "slug": slug.current,
    price,
    quantity,
    "imageUrl": image.asset->url,
    tags,
    description,
    features,
    dimensions {
      width,
      height,
      depth
    }
  }
`;
