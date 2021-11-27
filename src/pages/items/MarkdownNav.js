import React, { useEffect } from "react";
import "./styles/MarkdownNav.css";
import { getNavItems } from "../../utils/MarkdownParser";

export const MarkdownNav = ({ title, postsContent }) => {
  const strArray = getNavItems(postsContent);

  function updateNavStyles() {
    function reduceText(target) {
      if (target.clientWidth < target.scrollWidth) {
        while (target.clientWidth < target.scrollWidth) {
          const str = target.innerHTML;
          target.innerHTML = `${str.slice(0, str.length - 4)}...`;
        }
      }
    }

    const items = document.querySelectorAll(".markdown_nav_item");
    const paddingLeft = 15;

    items.forEach((item, idx) => {
      item.style.paddingLeft = `${paddingLeft * strArray[idx][0].length}px`;
      reduceText(item);
    });

    const navTitle = document.querySelector(".markdown_nav_title");
    reduceText(navTitle);
    navTitle.addEventListener("click", () => {
      const target = document.querySelector(".posts_detail_title");
      target.scrollIntoView();
    });
  }

  function setShortcutsEvent() {
    function shortcutsEvent(e) {
      const target = e.target.closest(".markdown_nav_item");

      if (target) {
        const value = target.innerHTML;
        const text =
          value.slice(value.length - 3, value.length) === "..."
            ? value.slice(0, value.length - 3)
            : value;

        const destination = headings.find((ele) =>
          ele.innerHTML.includes(text)
        );

        if (destination) destination.scrollIntoView();
      }
    }

    const headings = [
      ...document.querySelectorAll("h1"),
      ...document.querySelectorAll("h2"),
      ...document.querySelectorAll("h3"),
      ...document.querySelectorAll("h4"),
    ];

    const nav = document.querySelector(".markdown_nav");
    nav.addEventListener("click", shortcutsEvent);
  }

  useEffect(() => {
    updateNavStyles();
    setShortcutsEvent();
  }, []);

  return (
    <div className="markdown_nav">
      <span className="markdown_nav_title">{title}</span>
      {strArray.map((line, idx) => (
        <span className="markdown_nav_item" key={line + idx}>
          {line[1]}
        </span>
      ))}
    </div>
  );
};
