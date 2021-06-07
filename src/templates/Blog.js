import React, { useEffect, useState } from "react";
import "./Blog.css";
import { getAll } from "../utils/BlogApi";
import { PostsListBox } from "./items/PostsListBox";

export const Blog = () => {
  const [tags, setTags] = useState(null);
  const [tagCount, setTagCount] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPostsData = async () => {
      setLoading(true);
      setTags(null);
      setTagCount(null);
      setPostsData(null);

      const res = await getAll();
      const tagArray = [];
      const countMap = [];

      res.forEach((r) => {
        const tags = r.tag.split(" ");
        tags.forEach((tag) => {
          if (tagArray.includes(tag)) {
            countMap[tag]++;
          } else {
            tagArray.push(tag);
            countMap[tag] = 1;
          }
        });
      });
      console.log(res);

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
          {tags.map((tag, idx) => (
            <p key={idx}>
              {tag}({tagCount[tag]})
            </p>
          ))}
        </div>
      </div>
      <div className="opened_book_right">
        {postsData.map((data) => (
          <PostsListBox
            key={data._id}
            title={data.title}
            tags={data.tag}
            contents={data.contents}
            updatedAt={data.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};
