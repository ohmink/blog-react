import React from "react";
import "./Home.css";
import test from "../images/hi_icon.png";

export const Home = () => {
  return (
    <div className="home_template">
      <div className="home_profile_layout">
        <img src="" width="250" height="250" />
        <h2>권오민</h2>
        <h3>Junior developer</h3>
        <p>kkop5056@naver.com</p>
        <p>#Front-end #Back-end #Full-stack</p>
        <p>#JavaScript #React #TypeScript #Nodejs #Css...</p>
      </div>
      <div className="home_introduce_layout">
        <p>
          안녕하세요!
          <img width="30" height="30" src={test} />
        </p>
        <p>제 포트폴리오 사이트에 오신 걸 환영합니다!</p>
        <p>이곳에서는 제 프로필, 프로젝트에 대해 살펴볼 수 있으며,</p>
        <p>
          <b>블로그</b>와 <b> 깃허브</b>로 이동할 수 있습니다.
        </p>
      </div>
    </div>
  );
};
