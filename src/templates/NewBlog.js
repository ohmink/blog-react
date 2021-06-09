import React from "react";
import "./NewBlog.css";
import { create } from "../utils/PostsApi";

export const NewBlog = () => {
  const createPosts = (e) => {};
  return (
    <div className="new_blog_template">
      <form>
        <p>title</p>
        <input type="text" />
        <p>tag</p>
        <input type="text" />
        <p>contents</p>
        <textarea type="text" />
      </form>
      <button onClick={createPosts}>생성</button>
    </div>
  );
};
