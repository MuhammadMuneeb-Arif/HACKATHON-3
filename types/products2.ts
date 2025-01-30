
export interface Products {
    id: string;
    name: string;
    _types: "products";
    price: number;
    description?: string; 
    imageUrl?: string; 
    inventory: number;
    slug: {
      _type: "slug";
      current: string; 
    };
    image?:string
  }
  