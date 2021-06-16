import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [prePage, setPrePage] = useState(null);
  const items = ["About", "Project"];

  const openGithub = () => window.open("https://github.com/ohmink");
  const openHome = () => (window.location.href = "/");
  const movePage = (event) => {
    const curPage = event.target;

    if (!prePage) {
      curPage.style.backgroundColor = "lemonchiffon";
      setPrePage(curPage);
    } else if (prePage != curPage) {
      prePage.style.backgroundColor = "rgba(0,0,0,0)";
      curPage.style.backgroundColor = "lemonchiffon";
      setPrePage(curPage);
    }
  };

  return (
    <div className="header">
      <h3 className="header_title" onClick={openHome}>
        권오민의 서재
      </h3>
      <div className="header_button_layout">
        {items.map((item, idx) => (
          <Link
            key={idx}
            className="header_button"
            id={`header_button_${item.toLowerCase()}`}
            to={`/${item.toLowerCase()}`}
            onClick={movePage}
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
