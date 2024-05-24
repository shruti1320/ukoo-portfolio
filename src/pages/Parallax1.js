import React from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  Parallax,
} from "react-scroll-parallax";
import uku1 from "../images/Banner/uku1.jpg";
import uku2 from "../images/Banner/uku4.jpeg";
import uku3 from "../images/Banner/uku3.jpeg";
import uku4 from "../images/Banner/uku8.jpeg";
import uku5 from "../images/Banner/uku24.jpeg";
import uku6 from "../images/Banner/uku22.jpeg";
import uku7 from "../images/Banner/uku23.jpeg";
import uku8 from "../images/Banner/uku19.jpeg";
import uku9 from "../images/Banner/uku20.jpeg";

export default function Parallax1() {
  return (
    <>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku1}
          speed={-20}
          style={{ width: "100%", backgroundPosition: "center" }}
        />
      
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku2} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku3} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku4} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku5} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku6} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku7} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku8} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku9} speed={-20} />
      </ParallaxBanner>
    </>
  );
}
