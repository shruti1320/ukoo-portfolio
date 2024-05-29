import React, { useEffect, useState } from "react";
import Logo from "../components/Header/Logo";
import NavMenu from "../components/Header/NavMenu";
import OffcanvasMenu from "../components/Header/OffcanvasMenu";
import "../scss/Header.scss";
import "../scss/NavMenu.scss";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="container">

        <Logo scrolled={scrolled} />
        <div
          className={`navbar-toggler btn  btn-no-border ${scrolled ? 'text-black' : 'text-white'}`}
          type="button"
          data-toggle="collapse"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          style={{ border: "none" }}
          data-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
         <svg xmlns="http://www.w3.org/2000/svg" height="30" width="23" viewBox="0 0 448 512">
      <path fill={scrolled ? "#000" : "#fff"} d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
        </div>
        <NavMenu />
        </div>
        <OffcanvasMenu />
      </nav>
    </header>
  );
};
export default Header;