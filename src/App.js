import React from "react";
import "./App.css";
import About from "./about";
import Shop from "./shop";
import Nav from "./Nav";
import ItemDetail from "./item-detail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />

          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
