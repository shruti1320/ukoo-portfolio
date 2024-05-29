import React, { useState, useEffect } from "react";
import "../css/Gallery.scss";
import uku_gallery2 from "../images/Gallery/uku_gallery2.jpg";
import uku_gallery3 from "../images/Gallery/uku_gallery3.jpg";
import uku_gallery4 from "../images/Gallery/uku_gallery4.jpg";
import uku_gallery5 from "../images/Gallery/uku_gallery5.jpg";
import uku_gallery8 from "../images/Gallery/uku_gallery8.jpg";
import uku_gallery9 from "../images/Gallery/uku_gallery9.jpg";
import uku_gallery10 from "../images/Gallery/uku_gallery10.jpg";
import uku_gallery11 from "../images/Gallery/uku_gallery11.jpg";
import uku_gallery12 from "../images/Gallery/uku_gallery12.jpg";
import uku_gallery13 from "../images/Gallery/uku_gallery13.jpg";
import uku_gallery15 from "../images/Gallery/uku_gallery15.jpg";
import GalleryMenu from "../components/Gallery/GalleryMenu";
import GalleryItem from "../components/Gallery/GalleryItem";
import SlidingDiv from "../components/Gallery/SlidingDiv";

const imageGroups = {
  nature: [
    { src: uku_gallery2, text: "Mountain view" },
    { src: uku_gallery3, text: "Serene lake" },
    { src: uku_gallery4, text: "City skyline" },
    { src: uku_gallery5, text: "Panoramic view" },
  ],
  viewAdmirer: [
    { src: uku_gallery4, text: "City skyline" },
    { src: uku_gallery5, text: "Panoramic view" },
    { src: uku_gallery2, text: "Mountain view" },
    { src: uku_gallery3, text: "Serene lake" },
  ],
  traditional: [
    { src: uku_gallery8, text: "Cultural festival" },
    { src: uku_gallery9, text: "Traditional attire" },
    { src: uku_gallery13, text: "Cute puppy" },
    { src: uku_gallery15, text: "Wildlife safari" },
  ],
  sunset: [
    { src: uku_gallery10, text: "Sunset over ocean" },
    { src: uku_gallery11, text: "Golden hour" },
    { src: uku_gallery12, text: "Mountain sunset" },
  ],
  animalLover: [
    { src: uku_gallery13, text: "Cute puppy" },
    { src: uku_gallery15, text: "Wildlife safari" },
    { src: uku_gallery8, text: "Cultural festival" },
    { src: uku_gallery9, text: "Traditional attire" },
  ],
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("nature");
  const [images, setImages] = useState(imageGroups[selectedCategory]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageDetails, setImageDetails] = useState(images[0].src);
  const [showSlidingDivs, setShowSlidingDivs] = useState(false);
  const [showBottomRightDiv, setShowBottomRightDiv] = useState(false);

  useEffect(() => {
    setImages(imageGroups[selectedCategory]);
    setCurrentImageIndex(0);
    setImageDetails(imageGroups[selectedCategory][0].src);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (index) => {
    setShowSlidingDivs(true);
    setShowBottomRightDiv(true);
    setCurrentImageIndex(index);
    setImageDetails(images[index].src);
  };

  const handleBackgroundClick = () => {
    setShowSlidingDivs(false);
    setShowBottomRightDiv(false);
  };

  const handleNextImage = (event) => {
    event.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setImageDetails(images[nextIndex].src);
  };

  const handlePreviousImage = (event) => {
    event.stopPropagation();
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
    setImageDetails(images[prevIndex].src);
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
      <GalleryMenu
        categories={Object.keys(imageGroups)}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="gallery-images">
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            index={index}
            category={selectedCategory}
            onImageClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <SlidingDiv
        show={showSlidingDivs}
        onBackgroundClick={handleBackgroundClick}
        position="left"
        content={
          <div
            className="left-div-content"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <svg
              onClick={handlePreviousImage}
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="20"
              viewBox="0 0 320 512"
            >
              <path
                fill="#eeecde"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
            <img
              src={imageDetails}
              alt="sliding div"
              className="img-responsive left-div-img"
            />
            <svg
              onClick={handleNextImage}
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              width="20"
              viewBox="0 0 320 512"
            >
              <path
                fill="#eeecde"
                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </div>
        }
      />
      <SlidingDiv
        show={showSlidingDivs}
        onBackgroundClick={handleBackgroundClick}
        position="right"
        content={
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              perferendis nemo numquam in ratione incidunt delectus id
              laudantium nihil nulla harum, dolor beatae, maiores, vitae
              corporis assumenda dolorem mollitia quos! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Repellat adipisci,
              necessitatibus consequuntur mollitia recusandae et. Dicta
              consequatur illo, modi quasi quos recusandae nihil sit aperiam,
              voluptatem veniam, fugit rerum velit. Placeat quaerat ut tenetur
              sapiente consequuntur ad? Sequi, aut dignissimos? Illo eius
              repellat molestiae quam ipsum, hic quae blanditiis magnam, placeat
              perspiciatis, officia voluptate ratione non praesentium
              perferendis itaque exercitationem nobis. Distinctio, quae
              provident repellendus animi enim voluptas obcaecati, quia delectus
              sequi perspiciatis sint itaque dolore laboriosam. Expedita autem
              accusantium inventore quaerat, dignissimos itaque consequuntur
              corrupti provident dolore culpa alias repellendus aliquid!
              Molestiae fuga repellendus numquam repellat aperiam fugit
              temporibus magni ullam impedit maiores nobis placeat provident
              officia, est iste commodi pariatur tempora odit dolore sit nostrum
              et. Laudantium asperiores nisi dolorum, harum voluptates porro
              quos, tempore exercitationem, accusantium nobis ipsa nemo velit
              eum sed iure maxime! Inventore possimus velit necessitatibus at
              magni iusto itaque, quam neque animi fugit.
            </p>
          </>
        }
      />
      <div className="bottom">
        <div
          onClick={handleBackgroundClick}
          className={`sliding-div bottom ${showSlidingDivs ? "show" : ""}`}
        >
          <div className="sliding-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium deleniti sit eaque ut voluptatum quidem sequi corporis,
              delectus eveniet nisi dolorum natus illo quisquam quam architecto!
              Sunt est distinctio natus?
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-right">
  
        <div
          onClick={handleBackgroundClick}
          className={`sliding-div bottom-right ${showBottomRightDiv ? "show" : ""}`}
        >
          <div className="sliding-content">
            <p>
              This is the content of the bottom-right sliding div. You can add
              any text or elements here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
