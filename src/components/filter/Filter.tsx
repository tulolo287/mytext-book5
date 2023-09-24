const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const Filter = () => {
  return (
    <ul
      role="list"
      className="flex justify-around border-t border-gray-200 pt-6 text-sm font-medium text-gray-900"
    >
      {subCategories.map((category) => (
        <li key={category.name}>
          <a href={category.href}>{category.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
