import React from 'react';
import uku_white_logo from "../../images/Logo/uku_logo.png";
import uku_black_logo from "../../images/Logo/ukoo_black_logo.png";

const Logo = ({ scrolled }) => (
  <a className="navbar-brand" href="/">
    <img src={scrolled ? uku_black_logo : uku_white_logo} alt="logo" style={{ width: "100px",marginLeft:"170px" , marginRight:"40px"}} />
  </a>
);

export default Logo;
