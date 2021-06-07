import React from "react";
import "./Header.css";

export const Header = () => {
  const items = ["About", "Project", "Blog", "Github"];
  const githubLinkt = "https://github.com/ohmink";

  const openLink = (event) => {
    const buttonId = +event.target.id.match(/\d/i)[0];
    buttonId === 3
      ? window.open(githubLinkt)
      : (window.location.href = `/${items[buttonId]}`);
  };
  const openHome = () => (window.location.href = "/");

  return (
    <div className="header">
      <h3 className="header_title" onClick={openHome}>
        My note
      </h3>
      <div className="header_button_layout">
        {items.map((item, idx) => (
          <button
            key={idx}
            className="header_button"
            id={`header_button${idx}`}
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
