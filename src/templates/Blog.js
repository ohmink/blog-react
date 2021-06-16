import React, { useEffect, useState } from "react";
import "./Blog.css";
import { getAll } from "../utils/PostsApi";
import { PostsListBox } from "./items/PostsListBox";
import { getTagList } from "../utils/PostsHelper";

export const Blog = () => {
  const [tags, setTags] = useState(null);
  const [tagCount, setTagCount] = useState(null);
  const [curTag, setCurTag] = useState(null);
  const [originData, setOriginData] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);

  const tagButtonClicked = (e) => {
    const selectedTag = e.target;
    const selectedList =
      selectedTag.id === "전체보기"
        ? originData
        : originData.filter((data) =>
            String(data.tag).includes(selectedTag.id)
          );

    setPostsData(selectedList);

    curTag.style.fontWeight = "normal";
    curTag.style.color = "black";
    selectedTag.style.fontWeight = "bold";
    selectedTag.style.color = "lightseagreen";
    setCurTag(selectedTag);
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

      const defaultTag = document.getElementById("전체보기");
      defaultTag.style.fontWeight = "bold";
      defaultTag.style.color = "lightseagreen";
      setCurTag(defaultTag);
    };

    getPostsData();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <div className="blog_template">
      <div className="tags_container">
        <div>
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
      <div className="posts_container">
        {postsData.map((data) => {
          if (data.tag && data.contents)
            return (
              <PostsListBox
                key={data._id}
                id={data._id}
                title={data.title}
                tags={data.tag}
                contents={data.contents}
                updatedAt={data.updatedAt}
              />
            );
        })}
      </div>
    </div>
  );
};
