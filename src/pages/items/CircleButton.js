import styled, { css } from "styled-components";

export const CirCleButton = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  text-align: center;
  background-color: white;
  background-size: cover;
  margin: 10px;

  ${(props) =>
    props.primary &&
    css`
      background-image: url(${process.env.PUBLIC_URL + props.backgroundImage});
      background-color: ${props.backgroundColor};
    `}
`;
