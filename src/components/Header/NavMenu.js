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
    <div className="collapse navbar-collapse"  style={{marginRight:"60px"}}>
      <div className="navbar-nav nav-menu">
        <ul className="navbar-nav nav-items">
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner1")} href="#home">
              The Brand
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner2")} href="#bumn">
              Nature
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner3")} href="#softwareengineer">
              View Admirer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner4")} href="#it">
              Traditional
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner5")} href="#startup">
              Sunset
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToSection("banner6")} href="#Daftar">
              Animal Lover
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







