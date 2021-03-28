import React from "react";
import styled from "styled-components";
import man from "../../icons/developer.png";

const Container = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  height: 500px;
`;

const MainImage = styled.img`
  width: 600px;
  height: 500px;
  margin: 0;
`;

export const Contents = () => {
  return (
    <Container>
      <MainImage src={man} />
    </Container>
  );
};
