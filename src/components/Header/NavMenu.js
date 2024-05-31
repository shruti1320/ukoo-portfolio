import React from 'react';

const NavMenu = () => {




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
    <div className="collapse navbar-collapse" style={{fontFamily:"serif" , fontStyle:"oblique"}} >
      <div className="navbar-nav nav-menu">
        <ul className="navbar-nav nav-items">
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner1")} href="#home">
              The Brand
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner2")} href="#bumn">
              Beach
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner3")} href="#softwareengineer">
              Accessories 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner4")} href="#it">
              Travelling
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner5")} href="#startup">
              Snow
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner6")} href="#Daftar">
              Traditional
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner7")} href="#Daftar">
              Dessert
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner8")} href="#Daftar">
              Events
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner10")} href="#gallery">
              Gallery
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;







