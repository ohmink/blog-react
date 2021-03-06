import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import "./styles/Posts.css";

import { SideBar } from "./items/SideBar";
import { Loading } from "./Loading";
import { TagBox } from "./items/TagBox";
import { CirCleButton } from "./items/CircleButton";
import { isLogin, getDetail, remove } from "../utils/PostsApi";
import { getUpdateTime } from "../utils/PostsHelper";
import urlProvider from "../utils/ImageProvider";

const components = {
  code({ children }) {
    return (
      <SyntaxHighlighter
        style={docco}
        language="javascript"
        children={children}
        lineNumberStyle={{
          color: "gray",
          fontSize: "0.875rem",
          textAlign: "center",
        }}
        showLineNumbers={true}
        PreTag="div"
      />
    );
  },
};

export const Posts = ({ match, history }) => {
  const [loading, setLoading] = useState(true);
  const [detailData, setDetailData] = useState(null);
  const [tags, setTags] = useState(null);
  const [content, setContent] = useState(null);

  const goHome = () => history.push("/");

  const updatePosts = async () => {
    history.push({
      pathname: "/new",
      state: {
        id: match.params.postsId,
        title: detailData.title,
        tags: tags.join(" "),
        content: content,
      },
    });
  };

  const deletePosts = async () => {
    const res = await remove(match.params.postsId);
    if (res === 200) history.push("/");
  };

  useEffect(() => {
    const getDetailPosts = async () => {
      setLoading(true);
      setDetailData(null);
      setTags(null);
      setContent(null);

      const postsId = match.params.postsId;
      const data = await getDetail(postsId);
      const postsContent = data.contents;

      setDetailData(data);
      setTags(data.tag.split(" "));
      setContent(postsContent);
      setLoading(false);
    };

    getDetailPosts();
  }, []);

  if (loading) return <Loading />;

  const data = {
    title: detailData.title,
    postsContent: content,
  };

  return (
    <div className="posts_detail_template">
      <SideBar contentsType="MarkdownNav" data={data} homeFunction={goHome} />
      <div className="posts_detail_container">
        <div className="posts_detail_title">
          <p>{detailData.title}</p>
        </div>
        <div className="posts_detail_info">
          <div className="posts_detail_info_tag">
            {tags.map((tag, idx) => (
              <TagBox key={`tag_box_${idx}`} tagName={tag} id={idx} />
            ))}
          </div>
          <div className="posts_detail_info_time">
            {isLogin() ? (
              <div>
                <button onClick={updatePosts}>??????</button>
                <button onClick={deletePosts}>??????</button>
              </div>
            ) : (
              <span />
            )}
            {getUpdateTime(detailData.updatedAt)}
          </div>
        </div>
        <ReactMarkdown
          className="posts_detail_content"
          components={components}
          remarkPlugins={[gfm]}
          children={content}
        />
      </div>
    </div>
  );
};
