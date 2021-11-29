import React from "react";
import "./styles/SideBar.css";

import { MarkdownNav } from "./sidebar_children/MarkdownNav";
import { TagList } from "./sidebar_children/TagList";

export const SideBar = ({ contentsType, data, homeFunction }) => {
  return (
    <div className="sidebar">
      <p onClick={homeFunction} className="sidebar_home">
        Code Story
      </p>
      {contentsType === "MarkdownNav" ? (
        <MarkdownNav title={data.title} postsContent={data.postsContent} />
      ) : (
        <TagList
          tags={data.tags}
          tagButtonClicked={data.tagButtonClicked}
          tagCount={data.tagCount}
        />
      )}
    </div>
  );
};
