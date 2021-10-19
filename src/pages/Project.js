import React, { useEffect } from "react";
import "./styles/Project.css";
import { Cover } from "./items/Cover";
import { viewInit, wheel } from "../utils/CoversHelper";

export const Project = () => {
  const sampleData = new Array(30).fill().map((_) => `The Wheel`);

  const eventsInit = () => {
    let xPosition = 0;
    let diff = 0;
    const container = document.querySelector(".project");
    container.addEventListener("mousedown", (e) => (xPosition = e.clientX));
    container.addEventListener("mouseup", (e) => {
      diff = e.clientX - xPosition;
      wheel(diff);
    });
  };

  useEffect(() => {
    viewInit();
    eventsInit();
  });

  return (
    <div className="project">
      <ul className="featured-slider" id="wheel">
        {sampleData.map((title, idx) => (
          <Cover title={title} index={idx + 1} key={idx} />
        ))}
      </ul>
      <div className="wheel_intro">
        <h2>Circle Slide - Wheel</h2>
        <h3>Created at Oct.14 2021</h3>
      </div>
    </div>
  );
};
