import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { TagList } from "./layouts/tagList";
import { List } from "./layouts/list";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  width: 80%;
  height: 60vh;
  margin: 5rem auto;
`;

export const BlogPage = () => {
  return (
    <BlogContainer>
      <TagList />
      <Route path="/blog/:tag" component={List} />
    </BlogContainer>
  );
};
