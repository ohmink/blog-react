import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { Card } from "./card";
import { fadeIn, rotation } from "../../../public/animations";
import keyboard from "../../../icons/keyboard.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;

  font-weight: bold;
`;

const LineContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: left;
  align-items: center;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;

  ${(props) =>
    props.animation &&
    css`
      animation-name: ${fadeIn};
      animation-duration: ${props.animationDuration};
      animation-delay: ${props.animationDelay};
      animation-iteration-count: ${props.animationIterationCount};
    `}
`;

const Item = styled.div`
  width: fit-content;
  height: fit-content;
  margin: 1px;

  border-style: outset;
  border-color: #fecb00;

  ${(props) =>
    props.animation &&
    css`
      animation-name: ${fadeIn};
      animation-duration: ${(props) =>
        props.animationDuration ? props.animationDuration : "1s"};
      animation-delay: ${(props) =>
        props.animationDelay ? props.animationDelay : "1s"};
      animation-iteration-count: ${(props) => props.animationIterationCount};
    `}
`;

const KeyboardIcon = styled.img`
  width: 30px;
  height: 30px;

  margin-right: 1rem;

  animation-name: ${rotation};
  animation-delay: ${(props) =>
    props.animationDelay ? props.animationDelay : "1s"};
  animation-duration: ${(props) =>
    props.animationDuration ? props.animationDuration : "1s"};
`;

export const IntroduceHeader = () => {
  const time = 0.5;
  const component = [
    "〈",
    "I",
    "n",
    "t",
    "r",
    "o",
    "d",
    "u",
    "c",
    "t",
    "i",
    "o",
    "n",
    "/",
    "〉",
  ];
  const endTime = time + component.length / 10;
  useEffect(() => {
    setTimeout(() => {
      const introduceHeader = document.querySelector(".introduce_header");
      introduceHeader.style.visibility = "visible";
    }, endTime * 1000);
  });

  return (
    <Container className="typing_container">
      <LineContainer>
        {component.map((word, idx) => (
          <Item
            key={word}
            version="1"
            animation={true}
            animationDuration={"0.1s"}
            animationDelay={String(time + idx / 10) + "s"}
          >
            <Card text={word} color="#fecb00" width="30px" height="30px" />
          </Item>
        ))}
      </LineContainer>
      <LineContainer
        className="refresh"
        animation={true}
        animationIterationCount="1"
        animationDuration="0.1s"
        animationDelay={endTime + "s"}
      >
        <KeyboardIcon
          src={keyboard}
          animationDelay={endTime + "s"}
          animationDuration="0.1s"
        />
        <Item>
          <Card text={"CTRL"} color="#fecb00" width="50px" height="30px" />
        </Item>
        <Item>
          <Card text={"+"} color="#fecb00" width="30px" height="30px" />
        </Item>
        <Item>
          <Card text={"S"} color="#fecb00" width="30px" height="30px" />
        </Item>
      </LineContainer>
    </Container>
  );
};
