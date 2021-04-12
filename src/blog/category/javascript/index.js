import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const jsItems = [
  {
    id: 1,
    title: "Shallow copy vs. Deep copy 그리고 변경불가성(Immutability)",
    date: "2021-04-12",
  },
  {
    id: 2,
    title: "JavaScript에서 변수를 선언하는 세 가지 방식",
    date: "2021-04-12",
  },
];

const ListContainer = styled.ul`
  flex: 1;
  text-decoration: none;
  list-style: none;
  margin: 0;
`;

const ItemContainer = styled.li`
  background-color: rgba(100, 100, 100, 0.8);
  padding: 1rem 2rem;
  margin: 0;
  margin-bottom: 1rem;
  border-radius: 10px;
  width: 90%;
  height: fit-content;
  color: white;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemTitle = styled.h3`
  flex: 1;
  margin: 0;
`;
const ItemMessage = styled.p`
  flex: 1;
  margin: 0;
`;

export const JsList = () => {
  return (
    <ListContainer>
      {jsItems.map((item) => (
        <ItemContainer>
          <Link to={`/blog/javascript/${item.id}`} className="blog_post_button">
            <ItemTitle>{item.title}</ItemTitle>{" "}
            <ItemMessage>{item.date}</ItemMessage>
          </Link>
        </ItemContainer>
      ))}
    </ListContainer>
  );
};
