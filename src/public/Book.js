import styled, { css } from "styled-components";

export const BookLeft = styled.div`
  width: 22%;
  height: 100%;

  border-radius: 5px;
  border-width: 5px;
  border-color: lightgray;
  border-top-style: double;

  position: absolute;
`;

export const BookRight = styled.div`
  width: 56%;
  height: 100%;

  border-radius: 5px;
  border-width: 5px;
  border-style: double;
  border-color: lightgray;
  margin: 0 auto;
  ${(props) =>
    props.primary &&
    css`
      display: ${props.display};
      flex-direction: ${props.flexDirection};
      margin: ${props.margin};
      background-image: url(${process.env.PUBLIC_URL + props.backgroundImage});
      background-color: ${props.backgroundColor};
      background-size: ${props.backgroundSize};
      border-left: ${props.borderLeft};
      border-bottom: ${props.borderBottom};
      box-shadow: ${props.boxShadow};
      height: ${props.height};
    `};
`;
