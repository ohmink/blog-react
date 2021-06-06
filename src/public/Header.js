import React from "react";
import "./Header.css";

export const Header = () => {
  const items = ["About", "Project", "Blog"];
  const githubLinkt = "https://github.com/ohmink";

  const openLink = () => {
    window.open(githubLinkt);
  };

  return (
    <div className="header">
      <h3 className="header_title">My note</h3>
      <div className="header_button_layout">
        {items.map((item, idx) => (
          <button key={idx} className="header_button">
            {item}
          </button>
        ))}
        <button
          className="header_button"
          id={`github_link`}
          type="button"
          onClick={openLink}
        >
          Github
        </button>
      </div>
    </div>
  );
};
