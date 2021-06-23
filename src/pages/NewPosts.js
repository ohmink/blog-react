import React from "react";
import "./styles/NewPosts.css";
import { create } from "../utils/PostsApi";

export const NewPosts = () => {
  const createPosts = async (e) => {
    const title = document.getElementById("posts_create_title").value;
    const tag = document.getElementById("posts_create_tag").value;
    const contents = document.getElementById("posts_create_content").value;

    await create({ title: title, tag: tag, contents: contents });
  };

  return (
    <div className="new_blog_template">
      <p>title</p>
      <input type="text" id="posts_create_title" />
      <p>tag</p>
      <input type="text" id="posts_create_tag" />
      <p>contents</p>
      <textarea type="text" id="posts_create_content" />
      <button onClick={createPosts}>생성</button>
    </div>
  );
};
