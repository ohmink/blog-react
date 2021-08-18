import React from "react";
import "./styles/Login.css";
import { login } from "../../utils/PostsApi";

export const Login = ({ history }) => {
  const closeLogin = () => {
    const loginTemplate = document.querySelector(".login_template");
    loginTemplate.style.display = "none";
  };

  const tryLogin = async () => {
    try {
      const username = document.getElementById("input_username");
      const password = document.getElementById("input_password");

      const status = await login({
        username: username.value,
        password: password.value,
      });

      if (status >= 200 && status < 300) history.push("/new");
    } catch (error) {
      alert("error");
      return error;
    }
  };

  return (
    <div className="login_template">
      <div>
        <h3>If you are not admin →</h3>
        <button className="login_close_button" onClick={closeLogin}>
          X
        </button>
      </div>
      <p>Admin name</p>
      <input type="text" autoComplete="off" id="input_username" />
      <p>Admin password</p>
      <input type="password" autoComplete="off" id="input_password" />
      <button className="submit_button" onClick={tryLogin}>
        Login
      </button>
    </div>
  );
};
