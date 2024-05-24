import React from 'react';
import uku_black_logo from "../../images/Logo/ukoo_black_logo.png";

const Logo = () => (
  <a className="navbar-brand" href="/">
    <img src={uku_black_logo} alt="logo" style={{ width: "100px" }} />
  </a>
);

export default Logo;