import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100px;
  height: 100px;

  background-color: white;
  border-radius: 5px;

  margin: auto;
`;

export const Card = () => {
  return <CardContainer></CardContainer>;
};
