// OffcanvasMenu.js
import React from 'react';

const OffcanvasMenu = () => {

  const scrollToSection = (id,e) => {
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
  <div
    className="offcanvas offcanvas-end offcanvas-color"
    tabIndex="-1"
    id="offcanvasRight"
    data-bs-scroll="true" 
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <div
        type="button"
        className="btn-close text-reset btn-close-white ms-auto"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></div>
    </div>

    <div
    
    
      className="offcanvas-body"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
      }}
    >
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
      {/* <div style={{ marginTop: "auto", marginBottom: "30px" }}>
        <HeaderFooter />
      </div> */}
    </div>
  </div>
    </>
  )
}

export default OffcanvasMenu;
