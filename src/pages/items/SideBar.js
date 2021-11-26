import React from "react";
import "./styles/SideBar.css";

export const SideBar = ({ tags, tagButtonClicked, tagCount }) => {
  return (
    <div className="sidebar">
      <h2>Code Story</h2>
      <div>
        <h3>태그 목록</h3>
        <hr />
        {tags.map((tag, idx) => (
          <button
            key={idx}
            className="tag_button"
            id={tag}
            onClick={tagButtonClicked}
          >
            {tag}({tagCount[tag]})
          </button>
        ))}
      </div>
    </div>
  );
};
