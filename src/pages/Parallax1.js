import React, { useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  Parallax
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
import logob from "../images/Logo/bend-logo.jpeg";
import "../css/Parallax1.css";
import Modal from 'react-modal';
import Blog_1 from "../components/blogDetail/Blog_1";
import Blog_2 from "../components/blogDetail/Blog_2";
import Blog_3 from "../components/blogDetail/Blog_3";
import Blog_4 from "../components/blogDetail/Blog_4";
import Blog_5 from "../components/blogDetail/Blog_5";
import Blog_6 from "../components/blogDetail/Blog_6";
import Blog_7 from "../components/blogDetail/Blog_7";


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  content: {
    top: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', 
    maxWidth: '400px', 
    maxHeight: '80%', 
    overflow: 'auto',
    borderRadius: '10px',
    border: 'none', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
  }
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
            <div><button type="button" className="btn1" onClick={()=>{openModal(9)}}>View more</button></div>
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
            <div><button type="button" className="btn1" onClick={()=>{openModal(1)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false} 
      >    
        {modalContent==1&&<Blog_1 />} 
        {modalContent==2&&<Blog_2 />}    
        {modalContent==3&&<Blog_3 />}    
        {modalContent==4&&<Blog_4 />}    
        {modalContent==5&&<Blog_5 />}    
        {modalContent==6&&<Blog_6 />}    
        {modalContent==7&&<Blog_7 />}    
        {modalContent==8&&<Blog_7 />}    
        {modalContent==9&&<Blog_1 />} 
        <button className="btn" onClick={closeModal}>Close</button>
      </Modal>
      
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku3} speed={-20} />
        <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(2)}}>View more</button></div>
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
            <div><button type="button" className="btn1"  onClick={()=>{openModal(3)}}>View more</button></div>
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
            <div><button type="button" className="btn1"  onClick={()=>{openModal(4)}}>View more</button></div>
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
            <div><button type="button" className="btn1"  onClick={()=>{openModal(5)}}>View more</button></div>
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
            <div><button type="button" className="btn1"  onClick={()=>{openModal(6)}}>View more</button></div>
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
            <div><button type="button" className="btn1"  onClick={()=>{openModal(7)}}>View more</button></div>
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
            <div><button type="button" className="btn1"  onClick={()=>{openModal(8)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={logob} speed={-20} />
        {/* <ParallaxBannerLayer>
        <div className="content-wrapper">
            <div className="text-content text-white fs-4">The Ukoo</div>
            <div className="text-content text-white fs-4">Persembahan Forum Teknologi Sumatera Selatan</div>
            <div className="text-content text-white fs-4">Palembang, 28 - 29 November 2020</div>
            <div><button type="button" className="btn1"  onClick={()=>{openModal(8)}}>View more</button></div>
          </div>
        </ParallaxBannerLayer> */}
      </ParallaxBanner>
      
    </>
  );
}
