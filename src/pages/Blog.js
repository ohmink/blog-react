import React, { useEffect, useState } from "react";
import "./styles/Blog.css";

import { Header } from "../common/Header";
import { SideBar } from "./items/SideBar";
import { Login } from "./items/Login";
import { PostsListBox } from "./items/PostsListBox";
import { Loading } from "./Loading";
import { getAll, isLogin } from "../utils/PostsApi";
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
    if (isLogin()) history.push("/new");
    else {
      alert("관리자 기능입니다.");
      const loginTemplate = document.querySelector(".login_template");
      loginTemplate.style.display = "flex";
    }
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

    if (selectedList.length <= 8)
      document.querySelector(".blog_template").style.height = "100vh";
    else document.querySelector(".blog_template").style.height = "100%";
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
      <Header />
      <main className="blog_template_main">
        <SideBar
          tags={tags}
          tagButtonClicked={tagButtonClicked}
          tagCount={tagCount}
          history={history}
        />
        <ul className="posts_container">
          {postsData.map((data) => {
            if (data.tag && data.contents)
              return (
                <PostsListBox
                  key={data._id}
                  id={data._id}
                  title={data.title}
                  tags={data.tag}
                  contents={data.contents}
                  updatedAt={data.createdAt}
                  history={history}
                />
              );
            else {
              return null;
            }
          })}
        </ul>
        {/* <div>
          <img
            alt=""
            className="set_img"
            onClick={openLogin}
            src={urlProvider.set}
          />
          <Login history={history} />
        </div> */}
      </main>
    </div>
  );
};
