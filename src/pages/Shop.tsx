import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "../components/filter/Filter";
import Products from "../components/products/Products";
import { TCategory, TProduct } from "../types/data";
const products: TProduct[] = [
  {
    id: 1,
    category: "Totes",
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];
const Shop = () => {
  const [filteredProducts, setFilteredProducts] =
    useState<TProduct[]>(products);
  const navigate = useNavigate();

  const filterHandle = (
    category: TCategory
  ) => {
   // navigate(category.href)
    category.name === "All"
      ? setFilteredProducts(products)
      : setFilteredProducts(
          products.filter((product) => product.category === category.name)
        );
  };
  return (
    <>
      <Filter filterHandle={filterHandle} />
      <Products filteredProducts={filteredProducts} />
    </>
  );
};

export default Shop;
