// OffcanvasMenu.js
import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import "../../scss/Offcanvas.scss";
const OffcanvasMenu = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 70;
    
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }; 

  return (

    <>
      <Offcanvas.Header closeButton className="custom-close-button">
      
      </Offcanvas.Header>


    <Offcanvas.Body className="d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
      <ul style={{ listStyleType: "none" , paddingLeft: "0px" , fontFamily:"serif" , fontStyle:"oblique"}} className="m-auto" >
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" aria-current="page"  onClick={() => scrollToSection("banner1")} href="#home">
            The Brand
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner2")} href="#bumn">
            Beach
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner3")} href="#softwareengineer">
            Minimalistic
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner4")} href="#it">
            Travelling
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner5")} href="#startup">
            Snow
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner6")} href="#Daftar">
          Traditional
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner7")} href="#Daftar">
          Dessert
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner8")} href="#Daftar">
          Events
          </a>
        </li>
        {/* <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner10")} href="#gallery">
            Gallery
          </a>
        </li> */}
      </ul>

    </Offcanvas.Body>
    </>


  )
}

export default OffcanvasMenu;
