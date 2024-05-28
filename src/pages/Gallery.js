import React, { useState, useEffect } from "react";
import "../css/Gallery.scss"; // Optional for additional styling
import uku_gallery1 from "../images/Gallery/uku_gallery1.jpg";
import uku_gallery2 from "../images/Gallery/uku_gallery2.jpg";
import uku_gallery3 from "../images/Gallery/uku_gallery3.jpg";
import uku_gallery4 from "../images/Gallery/uku_gallery4.jpg";
import uku_gallery5 from "../images/Gallery/uku_gallery5.jpg";
// import uku_gallery6 from "../images/Gallery/uku_gallery6.jpg";
// import uku_gallery7 from "../images/Gallery/uku_gallery7.jpeg";
import uku_gallery8 from "../images/Gallery/uku_gallery8.jpg";
import uku_gallery9 from "../images/Gallery/uku_gallery9.jpg";
import uku_gallery10 from "../images/Gallery/uku_gallery10.jpg";
import uku_gallery11 from "../images/Gallery/uku_gallery11.jpg";
import uku_gallery12 from "../images/Gallery/uku_gallery12.jpg";
import uku_gallery13 from "../images/Gallery/uku_gallery13.jpg";
// import uku_gallery14 from "../images/Gallery/uku_gallery14.jpg";
import uku_gallery15 from "../images/Gallery/uku_gallery15.jpg";

const imageGroups = {
  nature: [
    // { src: uku_gallery1, text: "Beautiful forest" },
    { src: uku_gallery2, text: "Mountain view" },
    { src: uku_gallery3, text: "Serene lake" },
  ],
  viewAdmirer: [
    { src: uku_gallery4, text: "City skyline" },
    { src: uku_gallery5, text: "Panoramic view" },
  ],
  traditional: [
    { src: uku_gallery8, text: "Cultural festival" },
    { src: uku_gallery9, text: "Traditional attire" },
  ],
  sunset: [
    { src: uku_gallery10, text: "Sunset over ocean" },
    { src: uku_gallery11, text: "Golden hour" },
    { src: uku_gallery12, text: "Mountain sunset" },
  ],
  animalLover: [
    { src: uku_gallery13, text: "Cute puppy" },
    { src: uku_gallery15, text: "Wildlife safari" },
  ],
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("nature");
  const [images, setImages] = useState(imageGroups[selectedCategory]);
  const [showSlidingDivs, setShowSlidingDivs] = useState(false);

  useEffect(() => {
    setImages(imageGroups[selectedCategory]);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleArrowClick = () => {
    setShowSlidingDivs(true);
  };

  const backgroungClick = () => {
    setShowSlidingDivs(false);
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
        <div className="gallery-menu-wrapper">
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
        {/* <img src="your-image-url.jpg" alt="Gallery Menu" /> */}
      </div>
      <div className="gallery-images">
        {images.map((image, index) => (
          <>
            <div key={`${selectedCategory}-${index}`} className="gallery-item">
              <img
                src={image.src}
                alt={`${selectedCategory}-${index}`}
                onClick={handleArrowClick}
              />
              <p className="gallery-item-text" onClick={handleArrowClick}>
                {image.text}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="17.5"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#fff"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </p>
            </div>
            <div
              onClick={backgroungClick}
              className={`sliding-div left ${showSlidingDivs ? "show" : ""}`}
            >
              <svg
                style={{ marginTop: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="28"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#eeecde"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
              <div className="sliding-content">
                <h3>Hello World</h3>
                <p>
                  This is some additional content for the sliding div. You can
                  customize it as needed.
                </p>
                <div
                  style={{
                    backgroundImage: `url(${image.src})`,
                    width: "100%",
                    height: "100%",
                  }}
                ></div>
                {/* <img src={image.src} alt={`${selectedCategory}-${index}`} /> */}

                {/* <button>Click Me</button> */}
              </div>
            </div>

            <div
              onClick={backgroungClick}
              className={`sliding-div right ${showSlidingDivs ? "show" : ""}`}
            >
              <svg
                style={{ marginTop: "20px" }}
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="28"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#472d06"
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
              </svg>
              <div className="sliding-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  perferendis nemo numquam in ratione incidunt delectus id
                  laudantium nihil nulla harum, dolor beatae, maiores, vitae
                  corporis assumenda dolorem mollitia quos! Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Repellat adipisci,
                  necessitatibus consequuntur mollitia recusandae et. Dicta
                  consequatur illo, modi quasi quos recusandae nihil sit
                  aperiam, voluptatem veniam, fugit rerum velit. Placeat quaerat
                  ut tenetur sapiente consequuntur ad? Sequi, aut dignissimos?
                  Illo eius repellat molestiae quam ipsum, hic quae blanditiis
                  magnam, placeat perspiciatis, officia voluptate ratione non
                  praesentium perferendis itaque exercitationem nobis.
                  Distinctio, quae provident repellendus animi enim voluptas
                  obcaecati, quia delectus sequi perspiciatis sint itaque dolore
                  laboriosam. Expedita autem accusantium inventore quaerat,
                  dignissimos itaque consequuntur corrupti provident dolore
                  culpa alias repellendus aliquid! Molestiae fuga repellendus
                  numquam repellat aperiam fugit temporibus magni ullam impedit
                  maiores nobis placeat provident officia, est iste commodi
                  pariatur tempora odit dolore sit nostrum et. Laudantium
                  asperiores nisi dolorum, harum voluptates porro quos, tempore
                  exercitationem, accusantium nobis ipsa nemo velit eum sed iure
                  maxime! Inventore possimus velit necessitatibus at magni iusto
                  itaque, quam neque animi fugit.
                </p>
                <br></br>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officia labore, ex laboriosam debitis quo ducimus ab cum rem
                  quos nemo placeat, quidem at explicabo nostrum facere earum
                  delectus repellendus et omnis, corrupti dolorum. Hic enim
                  aperiam eum, amet beatae laudantium.
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
