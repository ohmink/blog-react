import React from "react";
import styled, { css } from "styled-components";

const Child = styled.span`
  margin: 3px;
  color: gray;
  width: 100%;
  ${(props) =>
    props.primary &&
    css`
      margin-left: ${props.marginLeft}px;
    `}
`;

export const MarkdownContents = ({ postsContent, className }) => {
  const poundCounts = [];
  const strArray = postsContent
    .split("\n")
    .filter(
      (line) => line.replaceAll(" ", "")[0] === "#" && !line.includes("####")
    )
    .map((line) => {
      const divides = line.split("#");
      poundCounts.push((divides.length - 1) * 10);
      return divides.pop();
    });
  console.log(poundCounts);

  return (
    <div className={className}>
      {strArray.map((line, idx) => (
        <Child
          key={line + idx}
          primary={true}
          marginLeft={`${poundCounts[idx]}`}
        >
          {line}
        </Child>
      ))}
    </div>
  );
};
