
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
import uku10 from "../images/Banner/uku26.jpg";
import uku11 from "../images/Banner/uku28.jpg";
import uku13 from "../images/Banner/uku30.jpg";
import u1 from "../images/Uku_Banner/u1.jpeg"
import "../css/Parallax1.scss";

export default function Parallax1() {
  return (
    <>
      <ParallaxBanner id="banner1" style={{ aspectRatio: "2/ 1" }}>
        <ParallaxBannerLayer
          image={uku1}
          className="banner1"
          translateY={[18, -10]}
          // speed={-10}
          // style={{ inset: "-20px 0px -70px" }}
        >
          
        </ParallaxBannerLayer>
      </ParallaxBanner>

      <ParallaxBanner id="banner7" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku2}
          className="banner7"
          translateY={[-20, 20]}
          // speed={20}
          // style={{ inset: "-50px 0px -150px" }}
        />
      </ParallaxBanner>


     


      <ParallaxBanner id="banner3" style={{ aspectRatio: "2 / 1" }}  >
        <ParallaxBannerLayer
          image={uku8}
          expanded={true}
          className="banner3"
          translateY={[-10, 30]}
          // speed={20}
          // style={{ inset: "-30px 0px -150px" }}

        />
      </ParallaxBanner>


      <ParallaxBanner id="banner4" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku7}
          className="banner4"
          translateY={[-15, 20]}
          // speed={20}
          // style={{ inset: "-45px 0px -300px" }}
        />
      </ParallaxBanner>


      <ParallaxBanner id="banner5" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer image={uku6} 
         translateY={[-15, 35]}
        // speed={-20} 
        
        />
      </ParallaxBanner>


    

      <ParallaxBanner id="banner9" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku9}
          className="banner9"
         translateY={[-15,25]}

          // speed={20}
          // style={{ inset: "-40px 0px -150px" }}
        />
      </ParallaxBanner>
      

      
      <ParallaxBanner id="banner8" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku3}
          className="banner8"
          translateY={[-25, 40]}
          // speed={20}
          // style={{ inset: "-30px 0px -150px" }}
        />
      </ParallaxBanner>


      <ParallaxBanner id="banner7" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku10}
          className="banner7"
          translateY={[-25, 25]}
          // speed={20}
          // style={{ inset: "-50px 0px -150px" }}
        />
      </ParallaxBanner>


      
  
      <ParallaxBanner id="banner6" style={{ aspectRatio: "2 / 1" }}>
        <ParallaxBannerLayer
          image={uku11}
          className="banner6"
          // speed={20}
          translateY={[-15, 30]}
          // style={{ inset: "-50px 0px -300px" }}
        />
      </ParallaxBanner>
    
   

    </>
  );
}

