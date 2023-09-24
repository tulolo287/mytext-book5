import { FC } from "react";
import { Link } from "react-router-dom";

type TProductItemProps = {
  product: {
    id: number;
    name: string;
    href: string;
    price: string;
    imageSrc: string;
    imageAlt: string;
  };
};
const ProductItem: FC<TProductItemProps> = ({ product }) => {
  return (
    <>
      <Link key={product.id} to={`/product/${product.id.toString()}`} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price}
        </p>
      </Link>
    </>
  );
};

export default ProductItem;
