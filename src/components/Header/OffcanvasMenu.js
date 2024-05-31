// OffcanvasMenu.js
import React from 'react';
import "../../scss/Offcanvas.scss"

const OffcanvasMenu = () => {

  const scrollToSection = (id,e) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }; 

  return (
    <>
  <div
    className="offcanvas offcanvas-end offcanvas-color"
    tabIndex="-1"
    id="offcanvasRight"
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
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <ul style={{ listStyleType: "none" , paddingLeft: "0px"}} className="m-auto">
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" aria-current="page"  onClick={() => scrollToSection("banner1")} href="#home">
            Ukoo - The Brand
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner2")} href="#bumn">
            Nature
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner3")} href="#softwareengineer">
            View Admirer
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner4")} href="#it">
            Traditional
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner5")} href="#startup">
            Sunset
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner6")} href="#Daftar">
            Animal Lover
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline"  data-bs-dismiss="offcanvas" onClick={() => scrollToSection("banner10")} href="#gallery">
            Gallery
          </a>
        </li>
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
