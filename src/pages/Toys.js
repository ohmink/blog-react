import React, { useEffect, useRef, useState } from "react";
import "./styles/Toys.css";
import { Cover } from "./toys_items/Cover";
import { Modal } from "./toys_items/Modal";
import { viewInit, wheel } from "../utils/CoversHelper";
import ProjectsContents from "./toys_items/toy_contents/toys";

export const Toys = () => {
  const MAX = 15;
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
    const card = e.target.closest(".active");
    // card.classList.toggle("ani");
    const id = card.id.split("_")[1];
    setModalStatus(true);
    setProject(+id - 1);

    // setTimeout(() => {
    //   setModalStatus(true);
    //   setProject(+id - 1);
    // }, 1000);
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
      <div className="circle_slider" id="wheel">
        {projects.map((data, idx) => (
          <Cover
            title={data.title}
            number={idx + 1}
            key={idx}
            onProject={onProject}
          />
        ))}
      </div>
      <div className="wheel_intro">
        <h2>Circle Slide - Wheel</h2>
        <h3>Created at 2021</h3>
      </div>
      <div className="wheel_intro">
        <h2>Circle Slide - Wheel</h2>
        <h3>Created at 2021</h3>
      </div>
      <div className="Card_intro">
        <h2>Card Title</h2>
        <h3>Created at 2021</h3>
      </div>
    </main>
  );
};
