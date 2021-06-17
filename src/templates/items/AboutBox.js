import React from "react";
import styled, { css } from "styled-components";

const BoxLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 10px 0;
  border-radius: 10px;
  border-width: 3px;
  border-style: solid;
  height: 120px;
  width: 120px;
  ${(props) =>
    props.primary &&
    css`
      border-color: ${props.borderColor};
    `};
`;

const LogoImg = styled.img`
  width: 100px;

  margin: 10px;
`;

export const AboutBox = ({ url, color }) => {
  return (
    <BoxLayout primary={true} borderColor={color}>
      <LogoImg src={url} />
    </BoxLayout>
  );
};
