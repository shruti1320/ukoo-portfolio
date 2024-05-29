// SlidingDiv.js
import React from "react";

export default function SlidingDiv({ show, onBackgroundClick, position, content }) {
  return (
    <div onClick={onBackgroundClick} className={`sliding-div ${position} ${show ? "show" : ""}`}>
      <svg style={{ marginTop: "20px" }} xmlns="http://www.w3.org/2000/svg" height="30" width="28" viewBox="0 0 384 512">
        <path
          fill={position === "left" ? "#eeecde" : "#472d06"}
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
      <div className="sliding-content">
        {content}
      </div>
    </div>
  );
}
