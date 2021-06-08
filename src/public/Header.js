import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const items = ["About", "Project", "Blog"];

  const openGithub = () => window.open("https://github.com/ohmink");
  const openHome = () => (window.location.href = "/");

  return (
    <div className="header">
      <h3 className="header_title" onClick={openHome}>
        My note
      </h3>
      <div className="header_button_layout">
        {items.map((item, idx) => (
          <Link
            key={idx}
            className="header_button"
            to={`/${item.toLowerCase()}`}
          >
            {item}
          </Link>
        ))}
        <button className="header_button" onClick={openGithub}>
          Github
        </button>
      </div>
    </div>
  );
};
