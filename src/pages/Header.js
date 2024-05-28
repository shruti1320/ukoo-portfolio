import React, { useEffect, useState } from "react";
import Logo from "../components/Header/Logo";
import NavMenu from "../components/Header/NavMenu";
import OffcanvasMenu from "../components/Header/OffcanvasMenu";
import OffcanvasToggleButton from "../components/Header/OffcanvasToggleButton";
import "../css/Header.scss";
import "../css/NavMenu.scss";



const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header>
      <nav className={`navbar fixed-top navbar-expand-lg ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
        <div className="container-fluid">
          <Logo scrolled={scrolled}/>
          <NavMenu />
        <OffcanvasToggleButton scrolled={scrolled} />
        </div>
        <OffcanvasMenu />
      </nav>
    </header>
  );
};
export default Header;