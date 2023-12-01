import categoriesContent from "../../content/categoriesContent";

import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <div className="category-outer-container">
        <span>Categories</span>
      <div className="category-container flex-grid">
        {categoriesContent.map((item) => {
          return <CategoryItem key={item.id} name={item.name} img={item.img} />;
        })}
      </div>
    </div>
  );
}
