import React from "react";
import "./TagList.css";

export const TagList = ({ tags, tagButtonClicked, tagCount }) => {
  return (
    <div className="tag_list">
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
  );
};
