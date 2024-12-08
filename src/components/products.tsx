interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div
        className="bg-white  overflow-hidden items-center justify-center hover:shadow-lg transition-shadow duration-300 
                   w-full sm:w-[163px] h-[288px] 
                   md:w-[200px] md:h-[320px] 
                   lg:w-[240px] lg:h-[360px] 
                   xl:w-[280px] xl:h-[400px] flex flex-col"
      >
        {/* Image Section */}
        <div
          className="w-full h-[200px] 
                     sm:h-[200px] 
                     md:h-[240px] 
                     lg:h-[280px] 
                     xl:h-[320px]"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="p-2 flex-grow flex flex-col justify-between">
          <h3
            className="text-sm sm:text-base 
                       md:text-lg 
                       lg:text-xl font-medium text-gray-800"
          >
            {product.name}
          </h3>
          <p
            className="text-gray-600 
                       text-sm sm:text-base 
                       md:text-lg 
                       lg:text-xl"
          >
            {product.price}
          </p>
        </div>
      </div>
      
  
    );
  };
  
  export default ProductCard;
  