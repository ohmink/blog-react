import React, { useState } from "react";
import "./About.css";

export const About = () => {
  const [modalState, setModalState] = useState(false);

  const clickButton = (e) => {
    const modal = document.querySelector(".about_test_modal");

    if (!modalState) {
      modal.style.display = "flex";
      setModalState(true);
    } else {
      modal.style.display = "none";
      setModalState(false);
    }
  };

  return (
    <div className="about_template">
      <div className="about_info_layout">
        <div>study</div>
        <div>skills</div>
        <div>tools</div>
      </div>
      <div className="about_test_layout">
        <div onClick={clickButton}>
          <img width="100" height="100" onClick={clickButton} />
          <p>인성검사</p>
        </div>
        <div>
          <img width="100" height="100" />
          <p>적성검사</p>
        </div>
        <div>
          <img width="100" height="100" />
          <p>심리검사</p>
        </div>
      </div>
      <div className="about_test_modal" onClick={clickButton}>
        <iframe src="/test1.pdf" />
      </div>
    </div>
  );
};
