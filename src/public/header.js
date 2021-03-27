import React from "react";
import styled from "styled-components";
import { Button } from "./button";
import Home from "../icons/home_white.png";
import User from "../icons/user_white.png";
import Project from "../icons/project_white.png";
import Flag from "../icons/flag_white.png";

const Container = styled.div`
  height: 50px;
  padding: 1rem;
  color: #fecb00;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTextContainer = styled.div`
  flex: 0.35;

  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;

  font-size: x-large;
`;

const ButtonContainer = styled.div`
  flex: 0.65;

  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
`;

export const Header = () => {
  return (
    <Container>
      <HeaderTextContainer>My</HeaderTextContainer>
      <ButtonContainer>
        <Button text="Home" color="white" image={Home} isFill={true} />
        <Button text="About." color="white" image={User} isFill={true} />
        <Button text="Project" color="white" image={Project} isFill={true} />
        <Button text="Blog" color="white" image={Flag} isFill={true} />
        <Button
          text="Github"
          color="black"
          isFill={false}
          background="#fecb00"
        />
      </ButtonContainer>
    </Container>
  );
};
