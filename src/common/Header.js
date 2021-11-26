import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const openGithub = () => window.open("https://github.com/ohmink");

  return (
    <header className="header">
      <div className="header_button_layout">
        <Link className="header_button" to="/about">
          About
        </Link>
        <Link className="header_button" to="/toys">
          Toys
        </Link>
        <button className="header_button" onClick={openGithub}>
          Github
        </button>
      </div>
    </header>
  );
};
