import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./public/header";
import { MainPage } from "./main/mainPage";
import { ProfilePage } from "./profile/profilePage";
import { BlogPage } from "./blog/blogPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact={true} component={MainPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/blog" component={BlogPage} />
    </div>
  );
}

export default App;
