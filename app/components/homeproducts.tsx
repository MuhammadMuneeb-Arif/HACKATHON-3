import Link from "next/link";
import Product from "../../types/products";

interface ProductCardProps {
  product: Product;
  route: "home" | "home2"; // Accepts the route as a prop to determine the link
}

const ProductCard: React.FC<ProductCardProps> = ({ product, route }) => {
  return (
    <Link href={`/pages/${route}/${product.slug}`}>
      <div className="bg-white hover:shadow-lg transition-shadow duration-300 h-full w-full flex flex-col cursor-pointer">
        <div className="w-full h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-800 truncate">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mt-2">
              £{product.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
