import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./styles/Posts.css";

import { Loading } from "./Loading";
import { TagBox } from "./items/TagBox";
import { CirCleButton } from "./items/CircleButton";
import { getDetail } from "../utils/PostsApi";
import { getUpdateTime } from "../utils/PostsHelper";
import { MarkdownContents } from "../utils/MarkdownParser";
import urlProvider from "../utils/ImageProvider";

const components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={docco}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export const Posts = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [detailData, setDetailData] = useState(null);
  const [tags, setTags] = useState(null);
  const [content, setContent] = useState(null);

  const toTheTop = () => (document.documentElement.scrollTop = 0);

  const toTheBottom = () =>
    (document.documentElement.scrollTop =
      document.documentElement.scrollHeight);

  useEffect(() => {
    const getDetailPosts = async () => {
      setLoading(true);
      setDetailData(null);
      setTags(null);
      setContent(null);

      const postsId = match.params.postsId;
      const data = await getDetail(postsId);
      const postsContent = data.contents
        .replaceAll("    ", "")
        .replaceAll(">", "");

      setDetailData(data);
      setTags(data.tag.split(" "));
      setContent(postsContent);
      setLoading(false);
    };

    getDetailPosts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="posts_detail_template">
      <div className="markdown_contents_container">
        <MarkdownContents
          postsContent={content}
          className="markdown_contents"
        />
      </div>
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
      <div className="posts_detail_nav">
        <CirCleButton
          className="posts_detail_nav_button"
          primary={true}
          backgroundImage={urlProvider.nav.upImgUrl}
          backgroundColor="whitesmoke"
          onClick={toTheTop}
        />
        <div>
          <CirCleButton
            className="posts_detail_nav_button"
            primary={true}
            backgroundImage={urlProvider.nav.listImgUrl}
            backgroundColor="lightgray"
          />
          <CirCleButton
            className="posts_detail_nav_button"
            primary={true}
            backgroundImage={urlProvider.nav.heartImgUrl}
          />
          <CirCleButton
            className="posts_detail_nav_button"
            primary={true}
            backgroundImage={urlProvider.nav.shareImgUrl}
          />
        </div>
        <CirCleButton
          className="posts_detail_nav_button"
          primary={true}
          backgroundImage={urlProvider.nav.downImgUrl}
          backgroundColor="whitesmoke"
          onClick={toTheBottom}
        />
      </div>
    </div>
  );
};
