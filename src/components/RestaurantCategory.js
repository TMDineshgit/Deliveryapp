
import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  category,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="category-container pb-1">
      <div
        className="category-header flex items-center justify-between bg-gray-300 p-2 rounded-md cursor-pointer"
        onClick={onToggle}
      >
        <h3>
          {category.title} ({category.itemCards.length})
        </h3>

        <span>{isOpen ? "⬆️" : "⬇️"}</span>
      </div>

      {isOpen && (
        <ItemList items={category.itemCards} />
      )}
    </div>
  );
};

export default RestaurantCategory;