import React from "react";
import Header from "../pages/Header";
import Parallax1 from "../pages/Parallax1";
import Footer from "../pages/Footer";
import Gallery from "../pages/Gallery";
export default function HomeScreen() {
  return (
    <div>
      <Header />
      <Parallax1 />
      <Gallery/>
      <Footer/>
    </div>
  );
}
