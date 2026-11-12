
import React, { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ({categories}) => {
  const [openIndex, setOpenIndex] = useState(null);


  const handleAccordion = (index) => {
    setOpenIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="menu-container w-6/12 mx-auto py-2">
      <h2 className="text-xl mb-3 font-semibold">Restaurant Menu</h2>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.title}
          category={category}
          isOpen={openIndex === index}
          onToggle={() => handleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
