import React from "react";
import "./App.css";
import { Header } from "./public/Header";
import { Home } from "./templates/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="templates">
        <Home />
      </div>
    </div>
  );
}

export default App;
