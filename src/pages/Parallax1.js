import React, { useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  Parallax,
} from "react-scroll-parallax";
import uku1 from "../images/Banner/uku1.jpg";
import uku2 from "../images/Banner/uku4.jpeg";
import uku6 from "../images/Banner/uku22.jpeg";
import uku7 from "../images/Banner/uku23.jpeg";
import uku8 from "../images/Banner/uku19.jpeg";
import uku9 from "../images/Banner/uku20.jpeg";
import uku10 from "../images/Banner/uku26.jpg";
import uku11 from "../images/Banner/uku28.jpg";
import logob from "../images/Logo/i.jpg";
import "../scss/Parallax1.css";
import "../scss/Scrollbar.scss";
import "../scss/Footer.scss";
import Modal from 'react-modal';
import Blog_1 from "../components/blogDetail/Blog_1";
import Blog_2 from "../components/blogDetail/Blog_2";
import Blog_3 from "../components/blogDetail/Blog_3";
import Blog_4 from "../components/blogDetail/Blog_4";
import Blog_5 from "../components/blogDetail/Blog_5";
import Blog_6 from "../components/blogDetail/Blog_6";
import Blog_7 from "../components/blogDetail/Blog_7";
import Footer from "./Footer";
import CopyrightText from "./CopyRightTaxt";
import Blog_8 from "../components/blogDetail/Blog_8";
import Blog_9 from "../components/blogDetail/Blog_9";
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Darker overlay for a more dramatic effect
    zIndex: 1000,
    transition: 'opacity 20s ease-in-out', // Smooth transition for overlay
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    wclassNameth: '80%',
    maxWclassNameth: '500px',
    maxHeight: '80%',
    overflow: 'auto',
    borderRadius: '15px',
    border: 'none',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Deeper shadow for more depth
    background: 'linear-gradient(135deg, #FFFFFF, #F1F1F1)', // Light gradient background
    padding: '20px',
    transition: 'opacity 20s ease-in-out', // Smooth transition for content appearance
    animation: 'modalFadeIn 20s, gradientChange 20s infinite alternate', // Fade-in animation for the modal and continuous gradient change
    // Gradient color for title and paragraph
    color: '#333', // Make text transparent to apply gradient
    WebkitBackgroundClip: 'text', // Apply gradient to text
    background: 'linear-gradient(135deg, #FF7E5F, #FEB47B)', // Gradient color for text
  },
  '@keyframes modalFadeIn': {
    from: {
      opacity: 0,
      transform: 'translate(-50%, -40%)',
    },
    to: {
      opacity: 1,
      transform: 'translate(-50%, -50%)',
    }
  },
  '@keyframes gradientChange': {
    '0%': {
      background: 'linear-gradient(135deg, #FF7E5F, #FEB47B)',
    },
    '50%': {
      background: 'linear-gradient(135deg, #6A11CB, #2575FC)',
    },
    '100%': {
      background: 'linear-gradient(135deg, #FF7E5F, #FEB47B)',
    }
  },
};
export default function Parallax1() {
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
  {modalContent===1&&<Blog_1 />}
  {modalContent===2&&<Blog_2 />}
  {modalContent===3&&<Blog_3 />}
  {modalContent===4&&<Blog_4 />}
  {modalContent===5&&<Blog_5 />}
  {modalContent===6&&<Blog_6 />}
  {modalContent===7&&<Blog_7 />}
  {modalContent===8&&<Blog_8 />}
  {modalContent===9&&<Blog_9 />}
  <div className="modalCloseButton" onClick={()=>{closeModal()}}><i class="fa-solid fa-xmark"></i></div>
</Modal>


   <div>
      <ParallaxBanner id="banner1" style={{ width:"100%", top: "0" , height: "100vh" }}>
        <ParallaxBannerLayer
          image={uku1}
          speed={15}
          className="banner1"
          style={{top:"0px"}}
        >
        </ParallaxBannerLayer>
        <ParallaxBannerLayer> 
        <div className="content-wrapper left-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content ">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content ">Palembang, 28 - 29 November 2020</div>
            <button class="pulse-button" onClick={()=>{openModal(1)}}>View more</button>
        </div>
        </ParallaxBannerLayer>
        </ParallaxBanner>
        </div>

      <ParallaxBanner  id="banner2"
        style={{ width:"100%", height: "100vh" }}>
        <ParallaxBannerLayer
          image={uku2}
          className="banner1"
          speed={45}
            scale={[1, 1]}
        />
       <ParallaxBannerLayer>
          <div className="content-wrapper right-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content ">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content ">Palembang, 28 - 29 November 2020</div>
            <div><button class="btn-hover color-10" onClick={()=>{openModal(2)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>


      <ParallaxBanner  id="banner3"
        style={{ width:"100%", top: "0" , height: "100vh" }}>
        <ParallaxBannerLayer
          image={uku8}
          expanded={true}
          className="banner1"
          speed={10}
            scale={[1, 1]}
        />
        <ParallaxBannerLayer>
        <div className="content-wrapper left-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content ">Nayraa jewelers surat Owner</div>
            <div className="text-content "> 28 - 29 November 2020</div>
            <div><button type="button" className="btn1" onClick={()=>{openModal(8)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>


      <ParallaxBanner id="banner4"
        style={{ width:"100%", top: "0" , height: "100vh" }}>
        <ParallaxBannerLayer
          image={uku7}
          className="banner1"
          speed={25}
          scale={[1, 1]}
        />
         <ParallaxBannerLayer>
        <div className="content-wrapper right-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content ">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content ">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btnnn"  onClick={()=>{openModal(7)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
        </ParallaxBanner>

      <ParallaxBanner id="banner5"  style={{ width:"100%", top: "0" , height: "100vh" }}>
        <ParallaxBannerLayer image={uku6}
          speed={25}
          className="banner1"
          scale={[1, 1]}
        />
          <ParallaxBannerLayer>
        <div className="content-wrapper left-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content ">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content ">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="box"  onClick={()=>{openModal(6)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
        </ParallaxBanner>


      <ParallaxBanner id="banner6"  style={{ width:"100%", top: "0" , height: "100vh" }}>
        <ParallaxBannerLayer
          image={uku9}
          className="banner1"
          speed={15}
          scale={[1, 1]}
        />
        <ParallaxBannerLayer>
        <div className="content-wrapper right-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content ">Palembang, 28 - 29 November 2020</div>
            <div ><button  className="btn-hover color-3"  onClick={()=>{openModal(9)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
        </ParallaxBanner>

{/* 
      <ParallaxBanner id="banner7"  style={{ width:"100%", top: "0" , height: "100vh" }}>
        <ParallaxBannerLayer
          image={uku3}
          className="banner1"
          speed={25}
          scale={[1, 1]}
        />
        <ParallaxBannerLayer>
        <div className="content-wrapper left-aligned">
            <div className="text-content">The Ukoo</div>
            <div className="text-content ">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(3)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
        </ParallaxBanner> */}


      <ParallaxBanner id="banner8"  style={{ width:"100%", top: "0" , height: "100vh" }}>        <ParallaxBannerLayer
          image={uku10}
          className="banner1"
          speed={15}
          scale={[1, 1]}
        />
        <ParallaxBannerLayer>
        <div className="content-wrapper right-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content ">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content ">Palembang, 28 - 29 November 2020</div>
            <div><button type="button"className="box"  onClick={()=>{openModal(5)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
        </ParallaxBanner>


      <ParallaxBanner id="banner9"  style={{ width:"100%", top: "0" , height: "100vh" }}>        <ParallaxBannerLayer
          image={uku11}
          className="banner1"
          speed={15}
          scale={[1, 1]}
        />
          <ParallaxBannerLayer>
        <div className="content-wrapper left-aligned">
            <div className="text-content ">The Ukoo</div>
            <div className="text-content ">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="bttn"  onClick={()=>{openModal(4)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
        </ParallaxBanner>


        <ParallaxBanner  className="banner2">
         <ParallaxBannerLayer
          image={logob}
          // speed={15}
          // scale={[1, 1]}
          translateY={[-25, 25]}
          style={{top:"0px"}}
        />
          <ParallaxBannerLayer>
       {/* <div className="footer-container">
          <Footer />
       </div> */}
         </ParallaxBannerLayer>
       {/* <div className="copyright-text-container">
         <CopyrightText />
      </div> */}
       </ParallaxBanner>
    </>
  );
}
