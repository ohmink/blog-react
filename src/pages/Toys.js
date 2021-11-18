import React, { useEffect, useRef, useState } from "react";
import "./styles/Toys.css";
import { Cover } from "./projects_items/Cover";
import { Modal } from "./projects_items/Modal";
import { viewInit, wheel } from "../utils/CoversHelper";
import ProjectsContents from "./projects_items/projects_contents/index";

export const Toys = () => {
  const MAX = 30;
  const projects = [...ProjectsContents];
  const sample = new Array(MAX - projects.length).fill({ title: "None" });
  if (projects.length < MAX) projects.push(...sample);

  const [modalStatus, setModalStatus] = useState(false);
  const [project, setProject] = useState(0);
  const [startX, setStartX] = useState();
  const container = useRef();

  function getXPosition(e) {
    if (!e.target.closest(".project_modal")) setStartX(e.clientX);
  }

  function moveWheel(e) {
    if (!e.target.closest(".project_modal")) wheel(e.clientX - startX);
  }

  const onProject = (e) => {
    const id = e.target.closest(".active").id.split("_")[1];
    setModalStatus(true);
    setProject(+id - 1);
  };

  useEffect(() => {
    viewInit();
  }, []);

  return (
    <main
      className="project"
      ref={container}
      onMouseDown={getXPosition}
      onMouseUp={moveWheel}
    >
      <Modal
        isOpen={modalStatus}
        project={project}
        setIsOpen={setModalStatus}
      />
      <ul className="featured-slider" id="wheel">
        {projects.map((data, idx) => (
          <Cover
            title={data.title}
            number={idx + 1}
            key={idx}
            onProject={onProject}
          />
        ))}
      </ul>
      <div className="wheel_intro">
        <h2>Circle Slide - Wheel</h2>
        <h3>Created at 2021</h3>
      </div>
    </main>
  );
};
