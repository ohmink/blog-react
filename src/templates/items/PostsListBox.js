import React from "react";
import "./PostsListBox.css";
import { TagBox } from "./TagBox";
import { getPostSummary, getUpdateTime } from "../../utils/PostsHelper";

export const PostsListBox = ({ title, tags, contents, updatedAt }) => {
  const tagArray = tags.split(" ");
  const summary = getPostSummary(contents);
  const updateTime = getUpdateTime(updatedAt);

  return (
    <div className="posts_list_box">
      <h2>{title}</h2>
      <p className="posts_summary">{summary}</p>
      <div className="posts_list_box_tags">
        {tagArray.map((tag, idx) => (
          <TagBox key={`tag_box_${idx}`} tagName={tag} id={idx} />
        ))}
      </div>
      <p className="posts_updated_time">{updateTime}</p>
    </div>
  );
};
