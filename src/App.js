import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./public/header";
import { MainPage } from "./main/mainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={MainPage} />
    </div>
  );
}

export default App;
