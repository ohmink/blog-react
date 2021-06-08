import React from "react";
import { Route } from "react-router";
import "./App.css";
import { Header } from "./public/Header";
import { Home } from "./templates/Home";
import { About } from "./templates/About";
import { Project } from "./templates/Project";
import { Blog } from "./templates/Blog";
import { NewBlog } from "./templates/NewBlog";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="templates">
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/new" component={NewBlog} />
      </div>
    </div>
  );
}

export default App;
