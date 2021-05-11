import React from "react";
import "./Header.css";

export const Header = () => {
  const items = ["Home", "About", "Project", "Blog", "Github"];
  const Percent = ["", "", ""];

  return (
    <div className="header">
      <h3 className="header_title">MY Blog</h3>
      <div className="header_button_layout">
        {items.map((item, idx) => (
          <button key={idx} className="header_button">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
