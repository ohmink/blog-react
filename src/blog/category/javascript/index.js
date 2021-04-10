import React from "react";

const jsItems = [
  "Shallow copy vs. Deep copy 그리고 변경불가성(Immutability)",
  "JavaScript에서 변수를 선언하는 세 가지 방식",
];

export const JsList = () => {
  return (
    <li>
      {jsItems.map((item) => (
        <ul>{item}</ul>
      ))}
    </li>
  );
};
