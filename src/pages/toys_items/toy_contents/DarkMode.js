import React, { useEffect } from "react";
import "./styles/DarkMode.css";

export const DarkMode = () => {
  useEffect(() => {
    document.querySelector(".dark_mode").addEventListener("click", () => {
      document.querySelector(".sun-logo").classList.toggle("animate-sun");
      document.querySelector(".moon-logo").classList.toggle("animate-moon");
      document.querySelector(".dark_mode").classList.toggle("dark");
    });
  }, []);

  return (
    <div className="dark_mode">
      <img
        className="sun sun-logo"
        src="https://user-images.githubusercontent.com/45379812/142212206-1c874868-2ce3-4181-bc24-fd9bf8274321.png"
        width="100"
        alt="sun"
      />
      <img
        className="moon moon-logo"
        src="https://user-images.githubusercontent.com/45379812/142212210-75cc5a46-0d7d-485c-8337-1fdeddca93ba.png"
        width="100"
        alt="moon"
      />
    </div>
  );
};
