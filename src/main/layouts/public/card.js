import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "100px")};
  height: ${(props) => (props.height ? props.height : "100px")};

  color: ${(props) => (props.color ? props.color : "black")};
  border-radius: 5px;

  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = ({ text, ...props }) => {
  return <CardContainer {...props}>{text}</CardContainer>;
};
