import React from "react";
import "./PostsListBox.css";
import { TagBox } from "./TagBox";
import { getPostSummary } from "../../utils/PostSummary";

export const PostsListBox = ({ title, tags, contents, updatedAt }) => {
  const tagArray = tags.split(" ");
  const summary = getPostSummary(contents);

  return (
    <div className="posts_list_box">
      <h3>{title}</h3>
      <p className="posts_summary">{summary}</p>
      <div className="posts_list_box_tags">
        {tagArray.map((tag, idx) => (
          <TagBox key={`tag_box_${idx}`} tagName={tag} />
        ))}
      </div>
      <p className="posts_updated_time">{updatedAt}</p>
    </div>
  );
};
