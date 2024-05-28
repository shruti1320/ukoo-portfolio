import React, { useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import uku1 from "../images/Banner/uku1.jpg";
import uku2 from "../images/Banner/uku4.jpeg";
import uku3 from "../images/Banner/uku3.jpeg";
import uku4 from "../images/Banner/uku8.jpeg";
import uku5 from "../images/Banner/uku24.jpeg";
import uku6 from "../images/Banner/uku22.jpeg";
import uku7 from "../images/Banner/uku23.jpeg";
import uku8 from "../images/Banner/uku19.jpeg";
import uku9 from "../images/Banner/uku20.jpeg";
import logob from "../images/Logo/b-vmake.jpeg";
import "../css/Parallax1.css";
import "../css/Scrollbar.scss";
import "../css/Footer.scss";
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
    width: '80%',
    maxWidth: '700px',
    maxHeight: '80%',
    overflow: 'auto',
    borderRadius: '15px', 
    border: 'none',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Deeper shadow for more depth
    background: 'linear-gradient(135deg, #ffffff, #f1f1f1)', // Light gradient background
    padding: '20px', 
    transition: 'opacity 20s ease-in-out', // Smooth transition for content appearance
    animation: 'modalFadeIn 20s, gradientChange 20s infinite alternate', // Fade-in animation for the modal and continuous gradient change
    // Gradient color for title and paragraph
    color: 'white', // Make text transparent to apply gradient
    WebkitBackgroundClip: 'text', // Apply gradient to text
    background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', // Gradient color for text
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
      background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
    },
    '50%': {
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)', 
    },
    '100%': {
      background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', 
    }
  },
};



export default function Parallax1() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (blogid) => {
    setModalContent(blogid);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalIsOpen(false);
  };
  return (
    <>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku1} speed={-10} style={{ width: "100%", backgroundPosition: "center top", backgroundSize: "cover"}} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1" onClick={()=>{openModal(1)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku2} speed={-20} />
        <ParallaxBannerLayer>
          <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1" onClick={()=>{openModal(2)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false} 
      >    
       <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={customStyles}
  ariaHideApp={false} 
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
</Modal>

      </Modal>
      
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku3} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(3)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku4} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(4)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku5} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(5)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku6} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(6)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku7} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(7)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku8} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(8)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku9} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(9)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "3 / 1", position: 'relative' }}>
      <ParallaxBannerLayer image={logob} speed={-20} style={{height:"1060px"}} />    
      <div style={{marginTop:"150px",marginRight: "-190px" }}>
        <Footer />
      </div>
      <div className="copyright-text-container">
        <CopyrightText />
      </div>
      </ParallaxBanner>
    </>
  );
}
