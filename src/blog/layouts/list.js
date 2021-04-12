import React from "react";
import styled from "styled-components";
import { JsList } from "../category/javascript/index";

const ListContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: baseline;
  margin-left: 5rem;
  width: 500px;
  height: 100%;
`;

export const List = (props) => {
  return (
    <ListContainer>
      {props.match.params.tag === "javascript" ? (
        <JsList />
      ) : (
        <div>
          <p>글이 존재하지 않습니다!</p>
        </div>
      )}
    </ListContainer>
  );
};
