import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
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
      <ParallaxBanner id="banner1" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku1}
          speed={-20}
          style={{ inset: "-20px 0px -170px" }}
        >
          {/* <ParallaxBannerLayer style={{ inset: "200px 0px -170px" }}>
            <div className="absolute  flex items-center justify-center " >
              <h1 className="text-8xl text-white font-thin " style={{fontFamily:"auto"}}>Hello World!</h1>
            </div>
          </ParallaxBannerLayer> */}
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner id="banner2" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku2}
          speed={-20}
          style={{ inset: "-50px 0px " }}
        />
      </ParallaxBanner>
      <ParallaxBanner id="banner3" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku3}
          speed={-20}
          style={{ inset: "-50px 0px -200px" }}
        />
      </ParallaxBanner>
      <ParallaxBanner id="banner4" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku4}
          speed={-20}
          style={{ inset: "-45px 0px -300px" }}
        />
      </ParallaxBanner>
      <ParallaxBanner id="banner5" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku5} speed={-20} />
      </ParallaxBanner>
      <ParallaxBanner id="banner6" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku6}
          speed={-20}
          style={{ inset: "-50px 0px -300px" }}
        />
      </ParallaxBanner>
      <ParallaxBanner id="banner7" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku7}
          speed={-20}
          style={{ inset: "-50px 0px -150px" }}
        />
      </ParallaxBanner>
      <ParallaxBanner id="banner8" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku8}
          speed={-20}
          style={{ inset: "-30px 0px -150px" }}
        />
      </ParallaxBanner>
      <ParallaxBanner id="banner9" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku9}
          speed={-20}
          style={{ inset: "-40px 0px -150px" }}
        />
      </ParallaxBanner>
    </>
  );
}
