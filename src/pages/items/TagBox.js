import React from "react";
import "./styles/TagBox.css";

export const TagBox = ({ tagName, id }) => {
  const colors = ["#616e9a", "#aa85b3", "#f9b5ae"];

  return (
    <span style={{ backgroundColor: colors[id] }} className="tag_box">
      {tagName}
    </span>
  );
};
