import React, { useState } from "react";
import "./About.css";
import urlProvider from "../utils/ImageProvider";

export const About = () => {
  const [modalState, setModalState] = useState(false);
  const [seletedTest, setSelectedTest] = useState([]);

  const clickButton = (e) => {
    const modal = document.querySelector(".about_test_modal");

    if (!modalState) {
      const testType = e.target.closest("div").id;
      if (testType === "personality_test")
        setSelectedTest(urlProvider.personality);
      else if (testType === "aptitute_test")
        setSelectedTest(urlProvider.aptitute);

      modal.style.display = "flex";
      setModalState(true);
    } else {
      modal.style.display = "none";
      setModalState(false);
    }
  };

  return (
    <div className="about_template">
      <div className="about_content_layout">
        <div className="about_info_layout">
          <div>skills</div>
          <div>tools</div>
        </div>
        <div className="vertical_divider"></div>
        <div className="about_test_layout">
          <div onClick={clickButton} id="personality_test">
            <img width="100" height="100" />
            <p>인성검사</p>
          </div>
          <div onClick={clickButton} id="aptitute_test">
            <img width="100" height="100" />
            <p>적성검사</p>
          </div>
          <div>
            <img width="100" height="100" />
            <p>심리검사</p>
          </div>
        </div>
        <div className="about_test_modal" onClick={clickButton}>
          {seletedTest.map((url) => (
            <img key={url} src={url} />
          ))}
        </div>
      </div>
      <div className="about_code_record">my code</div>
    </div>
  );
};
