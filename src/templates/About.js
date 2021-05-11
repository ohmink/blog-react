import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about_items">
        <h3 className="about_type">인적 사항</h3>

        <div className="about_item_content">
          <p>생년월일 950503</p>
          <p>GitHub https://github.com/ohmink</p>
          <p>연락처 010-3914-5883</p>
          <p>이메일 kkop5056@naver.com</p>
        </div>
      </div>
      <div className="contour" />

      <div className="about_items">
        <h3 className="about_type">학력 사항</h3>

        <div className="about_item_content">
          <p>강원대학교 컴퓨터공학 전공</p>
          <p>2014.02~2021.02 (수료 상태, 졸업예정)</p>
        </div>
      </div>
      <div className="contour" />

      <div className="about_items">
        <h3 className="about_type">교육 이수 사항(학업 외)</h3>

        <div className="about_item_content">
          <p>2020.07.15~2020.08.21 (총 1개월) </p>
          <p>과정명: 부스트캠프 2020 챌린지</p>
          <p>교육기관: 네이버 커넥트 재단</p>
          <p>교육내용</p>
          <p>
            1. 소프트웨어 공학 지식을 요구하는 문제를 매일 정해진 시간 내에
            JavaScript ES6 기반 코드로 해결(비동기, 객체지향, 자료구조, DVCS,
            아키텍처, 네트워크 등)
          </p>
          <p>
            2. 매주 금요일 다른 프로젝트를 이어받아 개발하는 '릴레이 프로젝트'
            수행
          </p>
          <h3 />
          <p>2020.08.31~2020.12.18 (총 4개월)</p>
          <p>과정명: 부스트캠프 2020 멤버십</p>
          <p>교육기관: 네이버 커넥트 재단</p>
          <p>
            1. 6주 동안 학습 스프린트 진행, 스프린트를 진행하면서 백엔드,
            프론트엔드에 대한 것을 배우고 코드를 공유하며 리뷰하고 리뷰 받았다.
            피어세션이나 스크럼 등을 통 해 미흡한 점을 보충했다.
          </p>
          <p>
            2. 8주 동안 팀 프로젝트를 진행하였다. 3주 동안 깃허브의 이슈 트래커
            기능을 클론 하는 프로젝트를 진행하였으며, 5주 동안 기업
            프로젝트-sdk를 이용한 모니터링 시스템을 진행했다.
          </p>
        </div>
      </div>
    </div>
  );
};
