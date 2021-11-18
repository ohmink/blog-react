import React from "react";
import { Route } from "react-router";
import { Header } from "./common/Header";
import { About } from "./pages/About";
import { Toys } from "./pages/Toys";
import { Blog } from "./pages/Blog";
import { NewPosts } from "./pages/NewPosts";
import { Posts } from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="templates">
        <Route path="/" exact={true} component={Blog} />
        <Route path="/post/:postsId" exact component={Posts} />
        <Route path="/about" component={About} />
        <Route path="/toys" component={Toys} />
        <Route path="/new" component={NewPosts} />
      </div>
    </div>
  );
}

export default App;
