import React from "react";
import "./styles/SideBar.css";

export const SideBar = ({ tags, tagButtonClicked, tagCount, history }) => {
  return (
    <div className="sidebar">
      <a href="./">Code Story</a>
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
