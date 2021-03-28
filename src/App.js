import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./public/header";
import { MainPage } from "./main/mainPage";
import { ProfilePage } from "./profile/profilePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/profile" component={ProfilePage} />
    </div>
  );
}

export default App;
