// GalleryMenu.js
import React from "react";

export default function GalleryMenu({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="gallery-menu">
      <div className="gallery-menu-wrapper">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryClick(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
