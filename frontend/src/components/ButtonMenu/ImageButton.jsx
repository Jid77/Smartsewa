import React from "react";
import "./ImageButton.css"; 

const ImageButton = ({ onClick, imgSrc, altText }) => {
  return (
    <button onClick={onClick}
    style={{
        border: "none",
        background : "none",
        padding : 5,
        cursor : "pointer",
    }}>
      <img src={imgSrc} alt={altText} style={{width : "346px", height: "165px"}} />
    </button>
  );
};

export default ImageButton;
