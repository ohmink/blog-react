import React from "react";
import styled from "styled-components";

const EmptyButton = styled.button`
  width: 100px;
  height: 40px;

  background-color: ${(props) =>
    props.isFill ? "rgba(255, 255, 255, 0)" : props.background};
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: bold;
  font-size: large;
  color: ${(props) => props.color};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 1rem;
`;

const Text = styled.p`
  margin: 0;
  margin-left: 5px;
  padding-top: 5px;
`;

export const Button = ({ text, color, image, isFill, background }) => {
  if (image)
    return (
      <EmptyButton color={color} isFill={isFill} background={background}>
        <img src={image} width="21" height="21" />
        <Text>{text}</Text>
      </EmptyButton>
    );
  else
    return (
      <EmptyButton color={color} isFill={isFill} background={background}>
        <Text>{text}</Text>
      </EmptyButton>
    );
};
