import React from "react";
import styled from "styled-components";
import { Introduce } from "./layouts/introduce";
import { Contents } from "./layouts/contents";

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
`;

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 4rem;
`;

const LowerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainPage = () => {
  return (
    <Paper>
      <MainContainer>
        <Introduce />
        <Contents />
      </MainContainer>
      <LowerContainer></LowerContainer>
    </Paper>
  );
};
