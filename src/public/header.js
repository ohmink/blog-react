import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./button";
import Home from "../icons/home_white.png";
import User from "../icons/user_white.png";
import Project from "../icons/project_white.png";
import Flag from "../icons/flag_white.png";

const Container = styled.div`
  height: 50px;
  padding: 1rem;
  padding-bottom: 0;
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
  text-decoration: none;
  display: flex;
  flex: row;
  justify-content: center;
  align-items: center;
`;

const images = [Home, User, Project, Flag];
const names = ["Home", "About", "Project", "Blog"];
const links = ["/", "/about", "/project", "/blog/codingtest"];

export const Header = () => {
  useEffect(() => {
    const headLinks = document.querySelectorAll(".header-link");
    headLinks.forEach((link) => (link.style.textDecoration = "none"));
  }, []);

  return (
    <Container>
      <HeaderTextContainer>My</HeaderTextContainer>
      <ButtonContainer>
        {images.map((img, idx) => (
          <Link to={links[idx]} className="header-link" key={idx}>
            <Button text={names[idx]} color="white" image={img} isFill={true} />
          </Link>
        ))}
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
