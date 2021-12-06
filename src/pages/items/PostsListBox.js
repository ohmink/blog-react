import React from "react";
import "./styles/PostsListBox.css";
import { TagBox } from "./TagBox";
import { getUpdateTime } from "../../utils/PostsHelper";

export const PostsListBox = ({ id, title, tags, updatedAt, history }) => {
  const tagArray = tags.split(" ");
  const updateTime = getUpdateTime(updatedAt);
  const clickedBox = () => {
    history.push(`/post/:${id}`);
  };

  return (
    <li className="posts_list_box" onClick={clickedBox}>
      <p className="posts_list_box_title">{title}</p>
      <div className="posts_list_box_tags">
        {tagArray.map((tag, idx) => (
          <TagBox key={`tag_box_${idx}`} tagName={tag} />
        ))}
      </div>
      <p className="posts_updated_time">{updateTime}</p>
    </li>
  );
};
