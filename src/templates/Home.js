import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home_template">
      <div className="book_layout">
        <div className="book_left_shadow"></div>
        <div className="book_contents">
          <div className="book_contents_left">
            <h2>Kwon</h2>
            <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oh-Min</h2>
          </div>
          <div className="book_contents_right">
            <div></div>
            <div className="book_contents_right_text_container">
              <h3>궁</h3>
              <h3>금</h3>
              <h3>하</h3>
              <h3>신</h3>
              <h3>가</h3>
              <h3>요</h3>
              <h3>?</h3>
            </div>
            <div className="book_contents_right_text_container">
              <h3>제</h3>
              <h3>가</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
