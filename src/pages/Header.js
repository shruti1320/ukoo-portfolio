// Header.js
import React from "react";
import Logo from "../components/Header/Logo";
import NavMenu from "../components/Header/NavMenu";
import OffcanvasMenu from "../components/Header/OffcanvasMenu";
import OffcanvasToggleButton from "../components/Header/OffcanvasToggleButton";
import "../css/Header.scss";

const Header = () => (
  <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Logo />
        <NavMenu />
      </div>
      <OffcanvasToggleButton />
      <OffcanvasMenu />
    </nav>
  </header>
);

export default Header;
