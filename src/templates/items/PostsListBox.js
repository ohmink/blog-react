import React from "react";
import "./PostsListBox.css";

export const PostsListBox = ({ title, tags, contents, updatedAt }) => {
  const tagArray = tags.split(" ");

  return (
    <div className="posts_list_box">
      <p>{title}</p>
      <h4>{contents}</h4>
      <div className="posts_list_box_tags">{tagArray}</div>
      <h4>{updatedAt}</h4>
    </div>
  );
};
