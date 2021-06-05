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
            <div className="book_contents_right_text_container">
              <h3>오</h3>
              <h3>신</h3>
              <br />
              <h3>것</h3>
              <h3>을</h3>
              <br />
              <h3>환</h3>
              <h3>영</h3>
              <h3>합</h3>
              <h3>니</h3>
              <h3>다</h3>
              <h3>.</h3>
            </div>
            <div className="book_contents_right_text_container">
              <h3>저</h3>
              <h3>의</h3>
              <br />
              <h3>다</h3>
              <h3>이</h3>
              <h3>어</h3>
              <h3>리</h3>
              <h3>에</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
