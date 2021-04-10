import React from "react";
import styled from "styled-components";
import { JsList } from "../category/javascript/index";

const ListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-left: 10rem;
  width: 500px;
  heigth: 500px;
`;

export const List = (props) => {
  return (
    <ListContainer>
      {props.match.params.tag === "javascript" ? (
        <JsList />
      ) : (
        <div>
          <h1>글이 존재하지 않습니다!</h1>
        </div>
      )}
    </ListContainer>
  );
};
