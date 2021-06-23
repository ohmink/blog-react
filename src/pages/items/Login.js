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

      if (status >= 200 && status < 300) {
        history.push("/new");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="login_template">
      <div>
        <p className="login_close_button" onClick={closeLogin}>
          X
        </p>
      </div>
      <p>Admin ID</p>
      <input type="text" id="input_username" />
      <p>Admin PW</p>
      <input type="password" id="input_password" />
      <button onClick={tryLogin}>Login</button>
    </div>
  );
};
