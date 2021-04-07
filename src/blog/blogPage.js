import React from "react";
import styled from "styled-components";
import { Taps } from "./layouts/taps";
import { List } from "./layouts/list";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  width: 70%;
  margin: 5rem auto;
`;

export const BlogPage = () => {
  return (
    <BlogContainer>
      <Taps />
      <List />
    </BlogContainer>
  );
};
