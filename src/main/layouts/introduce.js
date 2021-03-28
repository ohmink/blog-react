import React from "react";
import styled from "styled-components";
import { IntroduceHeader } from "./public/introduceHeader";

import { Hello } from "../../public/animations";
import bear from "../../icons/gom_icon.png";

const Container = styled.div`
  flex: 0.4;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 500px;
  margin-left: 10rem;
`;

const TextContainer = styled.div`
  visibility: hidden;
`;

const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const HelloIcon = styled.img`
  width: 40px;
  height: 40px;

  margin-top: 10px;
  margin-right: 1rem;

  animation-name: ${Hello};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const Accent = styled.b`
  color: #fecb00;
`;

export const Introduce = () => {
  return (
    <Container>
      <IntroduceHeader />
      <TextContainer className="introduce_header">
        <TextHeader>
          <h1>Hello!</h1>
          <HelloIcon src={bear} />
        </TextHeader>
        <h2>
          Welcome to my personal site. My name is <Accent>Kwon Oh-min </Accent>.
          I'm a <Accent>junior developer</Accent>, and I'm currently studying{" "}
          <Accent>front-end</Accent>.
        </h2>
        <h3>More?</h3>
      </TextContainer>
    </Container>
  );
};
