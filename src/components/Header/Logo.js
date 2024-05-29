import React from 'react';
import uku_white_logo from "../../images/Logo/uku_logo.png";
import uku_black_logo from "../../images/Logo/ukoo_black_logo.png";
import "../../scss/Header.scss"

const Logo = ({ scrolled }) => (
  <a className="navbar-brand logo-distance" href="/" >
    <img src={scrolled ? uku_black_logo : uku_white_logo} alt="logo"  style={{width:"100px"}} />
  </a>
);

export default Logo;
