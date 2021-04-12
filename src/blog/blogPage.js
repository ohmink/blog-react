import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { TagList } from "./layouts/tagList";
import { List } from "./layouts/list";
import { Post } from "./category/javascript/post";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  color: white;
  width: 80%;
  height: fit-content;
  margin: 5rem auto;
`;

export const BlogPage = () => {
  return (
    <BlogContainer>
      <TagList />
      <Route path="/blog/:tag" component={List} exact />
      <Route path="/blog/:tag/:id" component={Post} />
    </BlogContainer>
  );
};
