import React from "react";
import styled from "styled-components";

const TapsContainer = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Taps = () => {
  return (
    <TapsContainer>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
    </TapsContainer>
  );
};
