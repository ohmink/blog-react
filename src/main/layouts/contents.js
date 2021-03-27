import React from "react";
import styled from "styled-components";
import { Card } from "./public/card";

const Container = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  height: 500px;
`;

const PortfolioContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const CardContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const BlogContainer = styled.div`
  flex: 1;
`;

export const Contents = () => {
  return (
    <Container>
      <PortfolioContainer>
        <h1>TEST</h1>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </PortfolioContainer>
      <BlogContainer>2</BlogContainer>
    </Container>
  );
};
