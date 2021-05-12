import React from "react";
import "./Project.css";
import { ProjectBox } from "./items/ProjectBox";
import { title, dates, contents } from "./data/ProjectData";

export const Project = () => {
  return (
    <div className="project">
      {title.map((v, i) => (
        <ProjectBox key={i} title={v} period={dates[i]} content={contents[i]} />
      ))}
    </div>
  );
};
