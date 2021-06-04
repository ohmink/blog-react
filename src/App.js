import React from "react";
import { Header } from "./public/Header";
import { Home } from "./templates/Home";
import { About } from "./templates/About";
import { Project } from "./templates/Project";

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
