import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
