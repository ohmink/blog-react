import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./Posts.css";
import { BookLeft, BookRight } from "../public/Book";
import { TagBox } from "./items/TagBox";
import { getDetail } from "../utils/PostsApi";
import { getUpdateTime } from "../utils/PostsHelper";

export const Posts = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [detailData, setDetailData] = useState(null);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const getDetailPosts = async () => {
      setLoading(true);
      setDetailData(null);
      setTags(null);

      const postsId = match.params.postsId;
      const data = await getDetail(postsId);

      setDetailData(data);
      setTags(data.tag.split(" "));
      setLoading(false);
    };

    getDetailPosts();
  }, []);

  if (loading) return <div>로딩 중</div>;
  console.log(detailData);
  return (
    <div className="posts_detail_template">
      <BookLeft>목차</BookLeft>
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
        <div className="posts_detail_content">
          <ReactMarkdown remarkPlugins={[gfm]}>
            {detailData.contents}
          </ReactMarkdown>
        </div>
      </BookRight>
      <div className="posts_detail_utils">
        <div className="posts_detail_util_buttons">
          <span>목록</span>
          <span>하트</span>
          <span>공유</span>
        </div>
        <div className="posts_detail__util_updown">
          <span>위로</span>
          <span>아래로</span>
        </div>
      </div>
    </div>
  );
};
