// Footer.js
import React from 'react';
import SocialMediaIcon from '../components/Footer/SocialMediaIcon';
import "../css/Footer.scss";

const socialMediaLinks = [
  {
    href: "/",
    svgPath: 
    "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z",
    width: 30,
    height: 30,
    viewBoxHeight: 320,
    viewBoxWidth: 512,
    fill:"#3B5998",
   
  },
  {
    href: "/",
    svgPath: "M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z",
    width: 30,
    height: 30,
    viewBoxHeight: 512,
    viewBoxWidth: 512,
    fill:"#1DA1F2",
  },
  {
    href: "/",
    svgPath: "M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z",
    width: 35,
    height: 35,
    viewBoxHeight: 640,
    viewBoxWidth: 512,
    fill:"#4285F4",
  },
  {
    href: "/",
    svgPath: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z",
    width: 25,
    height: 30,
    viewBoxHeight: 448,
    viewBoxWidth: 512,
    fill:"#0077b5",
  },
  {
    href: "/",
    svgPath: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z",
    width: 30,
    height: 40,
    viewBoxHeight: 576,
    viewBoxWidth: 512,
    fill:"#c4302b",
  },
  // Add other social media links here
];

const Footer = () => {
  return (
    <div className='bg-light text-center' style={{paddingTop:"100px", paddingBottom:"100px"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-social">
              <ul style={{listStyleType: "none"}} >
                {socialMediaLinks.map((link, index) => (
                  <SocialMediaIcon key={index} href={link.href} svgPath={link.svgPath} width={link.width} height={link.height} fill={link.fill} viewBoxHeight={link.viewBoxHeight} viewBoxWidth={link.viewBoxWidth}/>
                ))}
              </ul>
            </div>
            {/* <p style={{color:"#696969", fontSize:"13px", textAlign:"center"}} className='text-center'>
              © 2020 SriwijayaDigital. Made With Love By{" "}
              AGT
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
