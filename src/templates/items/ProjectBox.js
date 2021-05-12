import React from "react";
import "./ProjectBox.css";

export const ProjectBox = ({ title, period, content }) => {
  return (
    <div className="project_box">
      <img className="project_img" />
      <div>
        <p className="project_box_title">{title}</p>
        <p>{period}</p>
        <p>{content}</p>
      </div>
      <button>링크 버튼</button>
    </div>
  );
};
