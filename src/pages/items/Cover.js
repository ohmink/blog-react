import React from "react";
import "./styles/Cover.css";

export const Cover = ({ title, index }) => {
  return (
    <li className="active">
      <div className="cover">
        <div className="top_image_container">
          <img
            className="top_image"
            src="https://user-images.githubusercontent.com/45379812/137182335-947fd04d-c923-4a62-869c-6457ea259bec.png"
          />
        </div>
        <h1>{title}</h1>
        <div className="cover_contents">
          <h1>{String(index).padStart(2, "0")}</h1>
          <img
            className="bottom_image"
            src="https://user-images.githubusercontent.com/45379812/137182328-dcc7f602-fc0a-4b12-b9f3-75957fe13326.png"
          />
        </div>
      </div>
    </li>
  );
};
