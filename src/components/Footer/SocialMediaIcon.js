// SocialMediaIcon.js
import React from 'react';

const SocialMediaIcon = ({ href, svgPath, width, height , viewBoxHeight, viewBoxWidth}) => {
  return (
    <li>
      <a href={href}>
        <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox={`0 0 ${viewBoxHeight} ${viewBoxWidth}`}>
          <path fill="#696969" d={svgPath} />
        </svg>
      </a>
    </li>
  );
};

export default SocialMediaIcon;
