import React from "react";
import "./styles/Modal.css";
import ProjectsContents from "./projects_contents";

export const Modal = ({ isOpen, project, setIsOpen }) => {
  const close = (e) => {
    if (e.target.className === "project_modal") setIsOpen(false);
  };
  const Contents = ProjectsContents[project]
    ? ProjectsContents[project].component
    : null;

  return isOpen && Contents ? (
    <section className="project_modal" onClick={close}>
      <Contents />
    </section>
  ) : null;
};
