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
            <div className="book_expression_container">
              <div className="book_expression">
                <p>일</p>
                <p>깨</p>
                <p>우</p>
                <p>는</p>
              </div>
              <div className="book_expression">
                <p>알</p>
                <p>게</p>
                <br />
                <p>하</p>
                <p>고</p>
              </div>
              <div className="book_expression">
                <p>기</p>
                <p>록</p>
                <p>하</p>
                <p>고</p>
              </div>
              <div className="book_expression">
                <p>나</p>
                <p>를</p>
                <br />
                <p>위</p>
                <p>해</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
