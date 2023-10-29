import { FC } from "react";
import { TProduct } from "../../types/data";
import ProductItem from "../product-item/ProductItem";

type TProducts = {
  filteredProducts: TProduct[] | undefined;
};

const Products: FC<TProducts> = ({ filteredProducts }) => {
  return (
    <div className="bg-white h-[calc(100vh-200px)] overflow-y-scroll">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts?.length
            ? filteredProducts?.map((product) => (
                <ProductItem product={product} />
              ))
            : "No products found"}
        </ul>
      </div>
    </div>
  );
};

export default Products;
