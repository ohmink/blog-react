import React, { useEffect } from "react";
import "./Header.css";

export const Header = () => {
  const items = ["About", "Project", "Blog"];
  const link = ["Github"];
  const linkTarget = ["https://github.com/ohmink"];

  const openLink = (event) => {
    const id = event.target.id.replace(/[a-zA-Z_]+/g, "");
    window.open(linkTarget[id]);
  };

  useEffect(() => {
    const target = [
      document.querySelector(".home_template"),
      document.querySelector(".about"),
      document.querySelector(".project"),
    ];

    const buttons = document.querySelectorAll(".header_button");
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => target[i].scrollIntoView(true));
    });
  }, []);

  return (
    <div className="header">
      <h3 className="header_title">My note</h3>
      <div className="header_button_layout">
        {items.map((item, idx) => (
          <button key={idx} className="header_button">
            {item}
          </button>
        ))}
        {link.map((item, idx) => (
          <button
            key={idx}
            className="header_link"
            id={`header_link${idx}`}
            type="button"
            onClick={openLink}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
