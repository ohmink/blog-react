import React, { useEffect, useState } from "react";
import "./styles/NewPosts.css";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { create, update } from "../utils/PostsApi";

const components = {
  code({ children }) {
    return (
      <SyntaxHighlighter
        style={docco}
        language="javascript"
        children={children}
        lineNumberStyle={{
          color: "gray",
          fontSize: "rem;",
          textAlign: "center",
        }}
        showLineNumbers={true}
        PreTag="div"
      />
    );
  },
};

export const NewPosts = ({ history }) => {
  const defaultInput = history.location.state
    ? history.location.state.content
    : "";
  const [input, setInput] = useState(defaultInput);

  const createPosts = async () => {
    const title = document.getElementById("posts_create_title").value;
    const tag = document.getElementById("posts_create_tag").value;
    const contents = document.getElementById("posts_create_content").value;

    if (history.location.state)
      await update(history.location.state.id, {
        title: title,
        tag: tag,
        contents: contents,
      });
    else await create({ title: title, tag: tag, contents: contents });

    goBack();
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="new_posts_template">
      <div className="new_posts_input">
        <p>title</p>
        <input
          type="text"
          className="posts_title"
          id="posts_create_title"
          defaultValue={
            history.location.state ? history.location.state.title : ""
          }
        />
        <p>tag</p>
        <input
          type="text"
          className="posts_tags"
          id="posts_create_tag"
          defaultValue={
            history.location.state ? history.location.state.tags : ""
          }
        />
        <p>contents</p>
        <textarea
          className="posts_textarea"
          id="posts_create_content"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button onClick={createPosts}>생성</button>
        <button onClick={goBack}>취소</button>
      </div>
      <ReactMarkdown
        className="posts_preview"
        components={components}
        remarkPlugins={[gfm]}
        children={input}
      />
    </div>
  );
};
