import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./Posts.css";
import { BookLeft, BookRight } from "../public/Book";
import { TagBox } from "./items/TagBox";
import { CirCleButton } from "./items/CircleButton";
import { getDetail } from "../utils/PostsApi";
import { getUpdateTime } from "../utils/PostsHelper";
import { MarkdownContents } from "../utils/MarkdownParser";

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

  if (loading) return <div>로딩 중</div>;

  return (
    <div className="posts_detail_template">
      <BookLeft>
        <MarkdownContents
          postsContent={content}
          className="markdown_contents"
        />
      </BookLeft>
      <BookRight
        primary={true}
        display="flex"
        flexDirection="column"
        height="fit-content"
      >
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
      </BookRight>
      <div className="posts_detail_utils">
        <div className="posts_detail_util_buttons">
          <CirCleButton
            primary={true}
            backgroundImage="/images/list.png"
            backgroundColor="lightgray"
          />
          <CirCleButton primary={true} backgroundImage="/images/heart.png" />
          <CirCleButton primary={true} backgroundImage="/images/share.png" />
        </div>
        <div className="posts_detail__util_updown">
          <CirCleButton
            primary={true}
            backgroundImage="/images/up.png"
            backgroundColor="whitesmoke"
            onClick={toTheTop}
          />
          <CirCleButton
            primary={true}
            backgroundImage="/images/down.png"
            backgroundColor="whitesmoke"
            onClick={toTheBottom}
          />
        </div>
      </div>
    </div>
  );
};
