import React from "react";
import { Route } from "react-router";
import { About } from "./pages/About";
import { Toys } from "./pages/Toys";
import { Blog } from "./pages/Blog";
import { NewPosts } from "./pages/NewPosts";
import { Posts } from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Route path="/" exact={true} component={Blog} />
      <Route path="/post/:postsId" exact={true} component={Posts} />
      <Route path="/about" component={About} />
      <Route path="/toys" component={Toys} />
      <Route path="/new" component={NewPosts} />
    </div>
  );
}

export default App;
