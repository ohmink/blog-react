import React from "react";
import "./styles/TagBox.css";

export const TagBox = ({ tagName }) => {
  const colors = [
    { name: "알고리즘", color: "#6E7371" },
    { name: "Javascript", color: "#9EAFA8" },
    { name: "CS", color: "#534157" },
    { name: "네트워크", color: "#736C74" },
    { name: "면접", color: "#758B87" },
    { name: "브라우저", color: "#A1A69C" },
    { name: "웹개발", color: "#363F59" },
    // {name: "알고리즘", color:"#d73642"},
    // {name: "알고리즘", color:"#2bc3d1"},
  ];
  const idx = colors.findIndex((data) => data.name === tagName);

  return (
    <span style={{ backgroundColor: colors[idx].color }} className="tag_box">
      {tagName}
    </span>
  );
};
