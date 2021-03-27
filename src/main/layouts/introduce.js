import React from "react";
import styled from "styled-components";
import cupid from "../../icons/cupid_icon.png";
import bear from "../../icons/gom_icon.png";

const Container = styled.div`
  flex: 0.4;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 500px;
  margin-left: 10rem;
`;

const TextHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const Accent = styled.b`
  color: #fecb00;
`;

export const Introduce = () => {
  return (
    <Container>
      <img src={cupid} width="300" height="200" />
      <TextHeader>
        <h1>Hello!</h1>
        <img src={bear} widht="40" height="40" />
      </TextHeader>
      <h2>
        Welcome to my personal site. My name is <Accent>Kwon Oh-min </Accent>.
        I'm a <Accent>junior developer</Accent>, and I'm currently studying{" "}
        <Accent>front-end</Accent>.
      </h2>
      <h3>More?</h3>
    </Container>
  );
};
