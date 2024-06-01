import React, { useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  Parallax,
} from "react-scroll-parallax";
import uku1 from "../images/Banner/uku5.jpeg";
import uku2 from "../images/Banner/uku4.jpeg";
import uku6 from "../images/Banner/uku22.jpeg";
import uku7 from "../images/Banner/uku23.jpeg";
import uku8 from "../images/Banner/uku19.jpeg";
import uku9 from "../images/Banner/uku20.jpeg";
import uku10 from "../images/Banner/uku26.jpg";
import uku11 from "../images/Banner/uku28.jpg";
import logob from "../images/Logo/i.jpg";
import Modal from "react-modal";
import Blog_1 from "../components/blogDetail/Blog_1";
import Blog_2 from "../components/blogDetail/Blog_2";
import Blog_3 from "../components/blogDetail/Blog_3";
import Blog_4 from "../components/blogDetail/Blog_4";
import Blog_5 from "../components/blogDetail/Blog_5";
import Blog_6 from "../components/blogDetail/Blog_6";
import Blog_7 from "../components/blogDetail/Blog_7";
import CopyrightText from "./CopyRightTaxt";
import Blog_8 from "../components/blogDetail/Blog_8";
import Blog_9 from "../components/blogDetail/Blog_9";
import "../scss/Parallax1.css";
import "../scss/Scrollbar.scss";
import "../scss/Footer.scss";
import "../scss/Parallax1.scss";
import CloseButton from 'react-bootstrap/CloseButton';

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Darker overlay for a more dramatic effect
    zIndex: 1000,
    transition: "opacity 20s ease-in-out", // Smooth transition for overlay
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    Width: "80%",
    maxWidth: "700px",
    maxHeight: "80%",
    overflow: "auto",
    borderRadius: "15px",
    border: "none",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Deeper shadow for more depth
    background: "linear-gradient(135deg, #FFFFFF, #F1F1F1)", // Light gradient background
    padding: "20px",
    transition: "opacity 20s ease-in-out", // Smooth transition for content appearance
    animation: "modalFadeIn 20s, gradientChange 20s infinite alternate", // Fade-in animation for the modal and continuous gradient change
    // Gradient color for title and paragraph
    color: "#333", // Make text transparent to apply gradient
    WebkitBackgroundClip: "text", // Apply gradient to text
    background: "linear-gradient(135deg, #FF7E5F, #FEB47B)", // Gradient color for text
  },
  "@keyframes modalFadeIn": {
    from: {
      opacity: 0,
      transform: "translate(-50%, -40%)",
    },
    to: {
      opacity: 1,
      transform: "translate(-50%, -50%)",
    },
  },
  "@keyframes gradientChange": {
    "0%": {
      background: "linear-gradient(135deg, #FF7E5F, #FEB47B)",
    },
    "50%": {
      background: "linear-gradient(135deg, #6A11CB, #2575FC)",
    },
    "100%": {
      background: "linear-gradient(135deg, #FF7E5F, #FEB47B)",
    },
  },
};

export default function Parallax2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const openModal = (blogclassName) => {
    setModalContent(blogclassName);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalContent(null);
    setModalIsOpen(false);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHclassNameeApp={false}
      >
        {modalContent === 1 && <Blog_1 />}
        {modalContent === 2 && <Blog_2 />}
        {modalContent === 3 && <Blog_3 />}
        {modalContent === 4 && <Blog_4 />}
        {modalContent === 5 && <Blog_5 />}
        {modalContent === 6 && <Blog_6 />}
        {modalContent === 7 && <Blog_7 />}
        {modalContent === 8 && <Blog_8 />}
        {modalContent === 9 && <Blog_9 />}
        <div
          className="modalCloseButton"
          onClick={() => {
            closeModal();
          }}
        >
          <i class="fa-solid fa-xmark"></i>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="black" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg> */}
      
        </div>
      </Modal>

   
        <ParallaxBanner
          id="banner1"
          style={{
            width: "100%",
            top: "0px",
            height: "100vh",
            display: "flex",
          }}
        >
          {" "}
          <ParallaxBannerLayer
            image={uku1}
            className="banner1"
            speed={-25}
            scale={[1, 1]}
            style={{ top: "-10px" }}
          ></ParallaxBannerLayer>
          <Parallax>
            <div className="content-wrapper left-aligned">
              <div className="text-content" style={{ color: "white" }}>
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px  #000" }}
                >
                  Where nature's serenity meets the
                </strong>
              </div>
              <div className="text-content" style={{ color: "white" }}>
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px  #000" }}
                >
                  sparkle of fine jewelry.
                </strong>
              </div>
              <div
                className="text-content "
                style={{ color: "white", textShadow: "3px 3px 3px  #000" }}
              >
                Explore our global collection with The Ukoo.
              </div>
              {/* <div className="text-content " style={{ color: "white" }}>
              Palembang, 28 - 29 November 2020
            </div> */}
              <button
                class="pulse-button"
                style={{ background: " #00A693" }}
                onClick={() => {
                  openModal(1);
                }}
              >
                View more
              </button>
            </div>
          </Parallax>
        </ParallaxBanner>
     

      <ParallaxBanner
        id="banner2"
        style={{ width: "100%", top: "0", height: "100vh", display: "flex" }}
      >
        <ParallaxBannerLayer
          image={uku2}
          className="banner1"
          style={{ top: "-40px" }}
          speed={-35}
          scale={[1, 1]}
        />
        <Parallax
          className="ms-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="content-wrapper right-aligned">
            <div className="text-content ">
              <strong
                className=" text-wrap text-md fw-bold "
                style={{ textShadow: "3px 3px 3px #000" }}
              >
                Basking in the sun and
              </strong>
            </div>
            <div className="text-content ">
              <strong
                className=" text-wrap text-md fw-bold "
                style={{ textShadow: "3px 3px 3px #000" }}
              >
                embracing the beauty of the ocean.
              </strong>
            </div>
            <div
              className="text-content "
              style={{ textShadow: "3px 3px 3px #000" }}
            >
              Life is better at the beach.
            </div>
            {/* <div className="text-content ">
              Palembang, 28 - 29 November 2020
            </div> */}
            <div>
              <button
                class="pulse-button"
                style={{ background: "#D74894 " }}
                onClick={() => {
                  openModal(2);
                }}
              >
                View more
              </button>
            </div>
          </div>
        </Parallax>
      </ParallaxBanner>

      <ParallaxBanner
        id="banner3"
        style={{ width: "100%", top: "0", height: "100vh", display: "flex" }}
      >
        <ParallaxBannerLayer
          image={uku8}
          expanded={true}
          style={{ top: "-60px" }}
          className="banner1"
          speed={-25}
          scale={[1, 1]}
        />
        <Parallax>
          <div className="content-wrapper left-aligned">
            {/* <div className="text-content text-dark">The Ukoo</div> */}
            <div className="text-content text-dark">
              <div className="text-content text-dark">
                <strong
                  className=" text-wrap text-md fw-bold text-dark "
                  style={{ textShadow: "2px 2px 2px #fff" }}
                >
                  A touch of floral charm
                </strong>
              </div>
              <div className="text-content text-dark">
                <strong
                  className=" text-wrap text-md fw-bold text-dark "
                  style={{ textShadow: "2px 2px 2px #fff" }}
                >
                  and a heart full of joy.
                </strong>
              </div>
            </div>
            <div
              className="text-content text-dark"
              style={{ textShadow: "1px 1px 2px #fff" }}
            >
              Embrace the beauty within InnerGlow
            </div>
            <div>
              <button
                type="button"
                className="pulse-button"
                style={{ background: "brown" }}
                onClick={() => {
                  openModal(8);
                }}
              >
                View more
              </button>
            </div>
          </div>
        </Parallax>
      </ParallaxBanner>

      <ParallaxBanner
        id="banner4"
        style={{ top: "0", height: "100vh", display: "flex" }}
      >
        <ParallaxBannerLayer
          image={uku7}
          style={{ top: "0" }}
          className="banner1"
          speed={-20}
          scale={[1, 1]}
        />
        <Parallax
          className="ms-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="content-wrapper right-aligned">
            {/* <div className="text-content ">The Ukoo</div> */}
            <div className="text-content ">
              <div className="text-content" style={{ color: "white" }}>
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px #000" }}
                >
                  At the shore, where every breeze brings
                </strong>
              </div>
            </div>
            <div className="text-content ">
              <div className="text-content" style={{ color: "white" }}>
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px #000" }}
                >
                  a touch of magic and every
                </strong>
              </div>
            </div>
            <div className="text-content" style={{ color: "white" }}>
              <strong
                className=" text-wrap text-md fw-bold "
                style={{ textShadow: "3px 3px 3px #000" }}
              >
                <div className="text-content ">moment is a treasure.</div>
              </strong>
            </div>
            <div>
              <button
                type="button"
                className="pulse-button"
                style={{ background: "#de6fa1" }}
                onClick={() => {
                  openModal(7);
                }}
              >
                View more
              </button>
            </div>
          </div>
        </Parallax>
      </ParallaxBanner>



      <ParallaxBanner
        id="banner5"
        style={{ width: "100%", top: "0", height: "100vh", display: "flex" }}
      >
        <ParallaxBannerLayer
          image={uku6}
          speed={-35}
          className="banner1"
          scale={[1, 1]}
        />
        <Parallax
          className="ms-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="content-wrapper right-aligned">
            {/* <div className="text-content text-dark">The Ukoo</div> */}
            <div className="text-content text-dark">
              <strong
                className=" text-wrap text-md fw-bold text-dark "
                style={{ textShadow: "2px 2px 2px #fff" }}
              >
                Playing fetch in a snowy paradise
              </strong>
            </div>

            <div className="text-content text-dark">
              <strong
                className=" text-wrap text-md fw-bold text-dark "
                style={{ textShadow: "2px 2px 2px #fff" }}
              >
                with my best friend.
              </strong>
            </div>

            <div
              className="text-content text-dark"
              style={{ textShadow: "2px 2px 2px #fff" }}
            >
              Winter adventures await!
            </div>
            <div>
              <button
                type="button"
                className="pulse-button"
                style={{ background: "#9E7B52" }}
                onClick={() => {
                  openModal(6);
                }}
              >
                View more
              </button>
            </div>
          </div>
        </Parallax>
      </ParallaxBanner>

      <ParallaxBanner
        id="banner6"
        style={{ width: "100%", top: "0", height: "100vh", display: "flex" }}
      >
        <ParallaxBannerLayer
          image={uku9}
          className="banner1"
          style={{ top: "-50px" }}
          speed={-30}
          scale={[1, 1]}
        ></ParallaxBannerLayer>

        <Parallax
          className="ms-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="content-wrapper right-aligned">
            {/* <div className="text-content ">The Ukoo</div> */}
            <div className="text-content">
              <strong
                className=" text-wrap text-md fw-bold "
                style={{ textShadow: "3px 3px 3px #000" }}
              >
                Dressed in tradition,
              </strong>
            </div>
            <div className="text-content">
              <strong
                className=" text-wrap text-md fw-bold "
                style={{ textShadow: "3px 3px 3px #000" }}
              >
                ready for a night of joy and dance.
              </strong>
            </div>
            <div
              className="text-content "
              style={{ textShadow: "1px 1px 2px #000" }}
            >
              Garba time is here!
            </div>
            <div>
              <button
                className="pulse-button"
                style={{ background: "#953F7E" }}
                onClick={() => {
                  openModal(9);
                }}
              >
                View more
              </button>
            </div>
          </div>
        </Parallax>
      </ParallaxBanner>

      <ParallaxBanner
        id="banner7"
        style={{ width: "100%", top: "0", height: "100vh", display: "flex" }}
      >
        <ParallaxBannerLayer
          image={uku10}
          className="banner1"
          speed={-35}
          scale={[1, 1]}
        ></ParallaxBannerLayer>
        <div
          className="ms-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Parallax>
            <div className="content-wrapper right-aligned">
              {/* <div className="text-content ">The Ukoo</div> */}
              <div className="text-content ">
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px #000" }}
                >
                  Embracing timeless beauty amidst the
                </strong>
              </div>
              <div className="text-content">
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px #000" }}
                >
                  majestic expanse of Dubai's desert.
                </strong>
              </div>

              <div>
                <button
                  type="button"
                  className="pulse-button"
                  style={{ background: "#6A718F" }}
                  onClick={() => {
                    openModal(5);
                  }}
                >
                  View more
                </button>
              </div>
            </div>
          </Parallax>
        </div>
      </ParallaxBanner>

      <ParallaxBanner
        id="banner8"
        style={{ top: "0", height: "100vh", display: "flex" }}
      >
        <ParallaxBannerLayer
          image={uku11}
          className="banner1"
          speed={-35}
          scale={[1, 1]}
        />
        <div
          className="ms-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Parallax>
            <div className="content-wrapper right-aligned">
              {/* <div className="text-content ">The Ukoo</div> */}
              <div className="text-content ">
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px #000" }}
                >
                  Embarking on a journey of discovery amidst the
                </strong>
              </div>
              <div className="text-content">
                <strong
                  className=" text-wrap text-md fw-bold "
                  style={{ textShadow: "3px 3px 3px #000" }}
                >
                  intricate world of jewelry craftsmanship.
                </strong>
              </div>

              <div>
                <button
                  type="button"
                  className="pulse-button"
                  style={{ background: "black" }}
                  onClick={() => {
                    openModal(4);
                  }}
                >
                  View more
                </button>
              </div>
            </div>
          </Parallax>
        </div>
      </ParallaxBanner>





      <ParallaxBanner id="" className="banner2">
        <ParallaxBannerLayer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          scale={[1, 1]}
          translateY={[-25, 32]}
        >
          <img src={logob} alt="logo" className="footer-logo" />
          <div>

          <div class="hexagon-wrapper">
         <div class="hexagon">
         <i class="fab fa-facebook"></i>
         </div>
       </div>
        <div class="hexagon-wrapper">
         <div class="hexagon">
           <i class="fab fa-twitter"></i>
         </div>
       </div>
      <div class="hexagon-wrapper">
       <div class="hexagon">
        <i class="fab fa-instagram"></i>
      </div>
     </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </>
  );
}
