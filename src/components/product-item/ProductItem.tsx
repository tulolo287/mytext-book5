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
  const productsInCart: number = 0;
  const addToCart = () => {};

  return (
    <>
      <li>
        <Link
          key={product.id}
          to={`/product/${product.id.toString()}`}
          className="group"
        >
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
        </Link>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <div className="flex justify-between">
          <span className="mt-1 text-lg font-medium text-gray-900">
            {product.price}
          </span>
          {productsInCart === 0 ? (
            <button
              onClick={addToCart}
              type="submit"
              className="flex w-1/2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex w-1/2">
              <button
                onClick={addToCart}
                type="submit"
                className="flex w-3/4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                -
              </button>
              <span className="m-2">{productsInCart}</span>
              <button
                onClick={addToCart}
                type="submit"
                className="flex w-3/4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                +
              </button>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default ProductItem;
