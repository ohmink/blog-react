import React, { useEffect } from "react";
import "./Loading.css";

export const Loading = () => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="loading_template">
      <div className="animation_box"></div>
      <span>Loading</span>
    </div>
  );
};
