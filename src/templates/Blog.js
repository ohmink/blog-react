import React, { useEffect, useState } from "react";
import "./Blog.css";
import { getAll } from "../utils/PostsApi";
import { PostsListBox } from "./items/PostsListBox";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [tags, setTags] = useState(null);
  const [tagCount, setTagCount] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostsData = async () => {
      setLoading(true);
      setTags(null);
      setTagCount(null);
      setPostsData(null);
      setTotalCount(0);

      const res = await getAll();
      const tagArray = [];
      const countMap = [];
      let total = 0;

      res.forEach((r, i) => {
        if (r.tag && r.tag.includes(" ")) {
          total++;
          const tags = r.tag.split(" ");
          tags.forEach((tag) => {
            if (tagArray.includes(tag)) {
              countMap[tag]++;
            } else {
              tagArray.push(tag);
              countMap[tag] = 1;
            }
          });
        }
      });

      setPostsData(res);
      setTags(tagArray);
      setTagCount(countMap);
      setTotalCount(total);
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
          <button className="tag_button">전체보기({totalCount})</button>
          {tags.map((tag, idx) => (
            <button key={idx} className="tag_button">
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
