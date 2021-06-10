import React, { useEffect, useState } from "react";
import "./Blog.css";
import { getAll } from "../utils/PostsApi";
import { PostsListBox } from "./items/PostsListBox";
import { Link } from "react-router-dom";
import { getTagList } from "../utils/PostsHelper";

export const Blog = () => {
  const [tags, setTags] = useState(null);
  const [tagCount, setTagCount] = useState(null);
  const [originData, setOriginData] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);

  const tagButtonClicked = (e) => {
    const tagName = e.target.id;
    const selected =
      tagName === "전체보기"
        ? originData
        : originData.filter((data) => String(data.tag).includes(tagName));

    setPostsData(selected);
  };

  useEffect(() => {
    const getPostsData = async () => {
      setLoading(true);
      setTags(null);
      setTagCount(null);
      setPostsData(null);
      setOriginData(null);

      const res = await getAll();
      const [tagArray, countMap] = getTagList(res);

      setOriginData(res);
      setPostsData(res);
      setTags(tagArray);
      setTagCount(countMap);
      setLoading(false);
    };

    getPostsData();
  }, []);

  if (loading) return <div>loading...</div>;
  return (
    <div className="opened_book">
      <div className="opened_book_left">
        <div className="tags_container">
          <h3>태그 목록</h3>
          <hr />
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="tag_button"
              id={tag}
              onClick={tagButtonClicked}
            >
              {tag}({tagCount[tag]})
            </button>
          ))}
        </div>
      </div>
      <div className="opened_book_right">
        {postsData.map((data) => {
          if (data.tag && data.contents)
            return (
              <PostsListBox
                key={data._id}
                title={data.title}
                tags={data.tag}
                contents={data.contents}
                updatedAt={data.updatedAt}
              />
            );
        })}
      </div>
      <div className="blog_service_container">
        <Link to="/new">글쓰기</Link>
      </div>
    </div>
  );
};
