import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Shop from "./components/Shop";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
    </Switch>
  </HashRouter>
);

export default App;
