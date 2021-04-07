import React, { useEffect } from "react";
import styled from "styled-components";
import * as fs from "fs";

const ListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-left: 10rem;
`;

export const List = () => {
  useEffect(() => {
    fs.readdir("./", (err, list) => console.log(list));
  }, []);
  return (
    <ListContainer>
      <p>test1</p>
      <p>test2</p>
    </ListContainer>
  );
};
