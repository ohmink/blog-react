import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TapsContainer = styled.div`
  flex: 0.3;

  justify-content: center;
  align-items: center;

  height: 100%;
`;

const Tags = styled.ul`
  list-style: none;
`;

const Tag = styled.li`
  margin-bottom: 0.5rem;

  &:hover {
    font-size: large;
    font-weight: bold;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-bottom: 1rem;
`;

const category = [
  "Computer science",
  "Coding test",
  "React",
  "Javascript",
].sort();

export const TagList = () => {
  const [selectedItem, setSelectedItem] = useState(category[0]);
  const colorTransform = (event) => {
    const pre = document.getElementById(selectedItem);
    pre.style.color = "white";
    pre.style.fontWeight = "normal";

    const tag = event.target;
    tag.style.color = "#0cd1c9";
    tag.style.fontWeight = "bold";

    setSelectedItem(tag.id);
  };

  useEffect(() => {
    const preTag = document.getElementById(`${selectedItem}`);
    preTag.style.color = "#0cd1c9";
    preTag.style.fontWeight = "bold";
  }, []);

  return (
    <TapsContainer>
      <Tags>
        <h3>태그 목록</h3>
        <Line />
        {category.map((name) => (
          <Tag key={name}>
            <Link
              onClick={colorTransform}
              to={`/blog/${name.replace(" ", "").toLowerCase()}`}
              className="blog_tag"
              id={name}
            >
              {name}
            </Link>
          </Tag>
        ))}
      </Tags>
    </TapsContainer>
  );
};
