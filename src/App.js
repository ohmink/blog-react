import React from "react";
import { Route } from "react-router";
import { Header } from "./public/Header";
import { About } from "./templates/About";
import { Project } from "./templates/Project";
import { Blog } from "./templates/Blog";
import { NewBlog } from "./templates/NewBlog";
import { Posts } from "./templates/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="templates">
        <Route path="/" exact={true} component={Blog} />
        <Route path="/post/:postsId" exact component={Posts} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog/new" component={NewBlog} />
      </div>
    </div>
  );
}

export default App;
