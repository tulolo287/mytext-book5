import { FC } from "react";
import { TCategory } from "../../types/data";

const subCategories = [
  { name: "All", href: "#" },
  { name: "Totes", href: "totes" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
type TFilter = {
  filterHandle: (category: TCategory) => void;
};
const Filter: FC<TFilter> = ({ filterHandle }) => {
  return (
    <div className="relative">
      <ul
        role="list"
        className="flex justify-around border-t border-gray-200 py-4 text-sm font-medium text-gray-900"
      >
        {subCategories.map((category) => (
          <li onClick={() => filterHandle(category)} key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
