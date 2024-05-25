import React, { useState, useEffect } from "react";
import "../css/Gallery.scss"; // Optional for additional styling
import uku_gallery1 from "../images/Gallery/uku_gallery1.jpg";
import uku_gallery2 from "../images/Gallery/uku_gallery2.jpg";
import uku_gallery3 from "../images/Gallery/uku_gallery3.jpg";
import uku_gallery4 from "../images/Gallery/uku_gallery4.jpg";
import uku_gallery5 from "../images/Gallery/uku_gallery5.jpg";
import uku_gallery6 from "../images/Gallery/uku_gallery6.jpg";
import uku_gallery7 from "../images/Gallery/uku_gallery7.jpeg";
import uku_gallery8 from "../images/Gallery/uku_gallery8.jpg";
import uku_gallery9 from "../images/Gallery/uku_gallery9.jpg";
import uku_gallery10 from "../images/Gallery/uku_gallery10.jpg";
import uku_gallery11 from "../images/Gallery/uku_gallery11.jpg";
import uku_gallery12 from "../images/Gallery/uku_gallery12.jpg";
import uku_gallery13 from "../images/Gallery/uku_gallery13.jpg";
import uku_gallery14 from "../images/Gallery/uku_gallery14.jpg";
import uku_gallery15 from "../images/Gallery/uku_gallery15.jpg";

const imageGroups = {
  nature: [uku_gallery1, uku_gallery2, uku_gallery3],
  viewAdmirer: [uku_gallery4, uku_gallery5, uku_gallery6],
  traditional: [uku_gallery7, uku_gallery8, uku_gallery9],
  sunset: [uku_gallery10, uku_gallery11, uku_gallery12],
  animalLover: [uku_gallery13, uku_gallery14, uku_gallery15],
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("nature");
  const [images, setImages] = useState(imageGroups[selectedCategory]);

  useEffect(() => {
    setImages(imageGroups[selectedCategory]);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="gallery" id="banner10">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <span className="sub-heading">My Gallery</span>
            <h4 className="large-heading">Memories To Admire</h4>
            <span className="fly-line"></span>
          </div>
        </div>
      </div>
      <div className="gallery-menu">
        {Object.keys(imageGroups).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="gallery-images">
        {images.map((image, index) => (
          <img key={`${selectedCategory}-${index}`} src={image} alt={`${selectedCategory}-${index}`} />
        ))}
      </div>
    </div>
  );
}
