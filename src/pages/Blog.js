import React, { useEffect, useState } from "react";
import "./styles/Blog.css";

import { Login } from "./items/Login";
import { PostsListBox } from "./items/PostsListBox";
import { Loading } from "./Loading";
import { getAll } from "../utils/PostsApi";
import { getTagList } from "../utils/PostsHelper";
import urlProvider from "../utils/ImageProvider";

export const Blog = ({ history }) => {
  const [tags, setTags] = useState(null);
  const [tagCount, setTagCount] = useState(null);
  const [curTag, setCurTag] = useState(null);
  const [originData, setOriginData] = useState(null);
  const [postsData, setPostsData] = useState(null);
  const [loading, setLoading] = useState(true);

  const openLogin = () => {
    alert("관리자 기능입니다.");
    const loginTemplate = document.querySelector(".login_template");
    loginTemplate.style.display = "flex";
  };

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
      if (defaultTag) {
        defaultTag.style.fontWeight = "bold";
        defaultTag.style.color = "lightseagreen";
        setCurTag(defaultTag);
      }
    };

    getPostsData();
  }, []);

  if (loading) return <Loading />;

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
                history={history}
              />
            );
        })}
      </div>
      <div>
        <img className="set_img" onClick={openLogin} src={urlProvider.set} />
        <Login history={history} />
      </div>
    </div>
  );
};
