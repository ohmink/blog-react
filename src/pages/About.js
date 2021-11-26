import React, { useState } from "react";
import "./styles/About.css";
import urlProvider from "../utils/ImageProvider";
import { AboutBox } from "./items/AboutBox";

export const About = () => {
  const [modalState, setModalState] = useState(false);
  const [seletedTest, setSelectedTest] = useState([]);
  const skillColors = [
    "#e34f26",
    "#2162af",
    "#d6ba32",
    "#84b925",
    "black",
    "#68dbf9",
    "#007acc",
  ];
  const toolColors = ["black", "#007bcd"];

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
      <div className="about_tech_layout">
        <div className="about_tech_container">
          <div>
            <h1 className="about_tech_name">Skills</h1>
            <h1>&nbsp;I Use</h1>
          </div>
          <div className="logos_container">
            {urlProvider.skills.map((url, idx) => (
              <AboutBox key={url} url={url} color={skillColors[idx]} />
            ))}
          </div>
        </div>
        <div className="about_tech_container">
          <div>
            <h1 className="about_tech_name">Tools</h1>
            <h1>&nbsp;I Use</h1>
          </div>
          <div className="logos_container">
            {urlProvider.tools.map((url, idx) => (
              <AboutBox key={url} url={url} color={toolColors[idx]} />
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="about_test_layout">
        <div className="about_test_title">
          <h1 className="about_tech_name">Test</h1>
          <h1>&nbsp;About Me</h1>
        </div>
        <div className="about_test_container">
          <div onClick={clickButton} id="personality_test">
            <img alt="" src={urlProvider.test.personality} />
            <p>인성검사</p>
          </div>
          <div onClick={clickButton} id="aptitute_test">
            <img alt="" src={urlProvider.test.aptitute} />
            <p>적성검사</p>
          </div>
          <div onClick={clickButton} id="mind_test">
            <img alt="" src={urlProvider.test.mind} />
            <p>심리검사</p>
          </div>
        </div>
      </div>
      <div className="about_test_modal" onClick={clickButton}>
        {seletedTest.map((url) => (
          <img alt="" key={url} src={url} />
        ))}
      </div>
      <div className="about_code_record">
        <div className="about_test_title">
          <h1>Days I</h1>
          <h1 className="about_tech_name">&nbsp;Code</h1>
        </div>
        <img alt="" src="https://ghchart.rshah.org/green/ohmink" />
      </div>
    </div>
  );
};
