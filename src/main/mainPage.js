import React from "react";
import styled from "styled-components";
import { Introduce } from "./layouts/introduce";
import { Contents } from "./layouts/contents";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 4rem;
  height: 100%;
`;

export const MainPage = () => {
  return (
    <MainContainer>
      <Introduce />
      <Contents />
    </MainContainer>
  );
};
