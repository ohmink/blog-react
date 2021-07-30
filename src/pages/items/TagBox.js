import React from "react";
import "./styles/TagBox.css";

export const TagBox = ({ tagName }) => {
  const colors = [
    "#616e9a",
    "#aa85b3",
    "#f9b5ae",
    "#81d4cf",
    "#fc651e",
    "#8e32ac",
    "#5849be",
    "#d73642",
    "#2bc3d1",
  ];
  const randomIdx = Math.floor(Math.random() * 8);

  return (
    <span style={{ backgroundColor: colors[randomIdx] }} className="tag_box">
      {tagName}
    </span>
  );
};
