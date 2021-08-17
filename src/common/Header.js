import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  function openGithub() {
    window.open("https://github.com/ohmink");
  }
  function goHome() {
    window.location.href = "/";
  }

  return (
    <div className="header">
      <h3 className="header_title" onClick={goHome}>
        권오민의 서재
      </h3>
      <div className="header_button_layout">
        <Link className="header_button" to="/about">
          About
        </Link>
        <buttton
          className="header_button"
          onClick={() => alert("준비 중입니다.")}
        >
          Project
        </buttton>
        <button className="header_button" onClick={openGithub}>
          Github
        </button>
      </div>
    </div>
  );
};
