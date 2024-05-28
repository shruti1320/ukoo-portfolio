import React from 'react';
import "../../css/Footer.scss";

const SocialMediaIcon = ({ href, svgPath, width, height, viewBoxHeight, fill, viewBoxWidth }) => {
  return (
    <li className="footer-social-icon" style={{ backgroundColor: fill }}>
      <a href={href} style={{ display: 'block', width: `${width}px`, height: `${height}px` }}>
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox={`0 0 ${viewBoxHeight} ${viewBoxWidth}`} fill={fill}>
          <path fill="#fff" d={svgPath} />
        </svg>
      </a>
    </li>
  );
};

export default SocialMediaIcon;
