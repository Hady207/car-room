import React from "react";

import Home from "./Home";
import About from "./About";
import Room from "./Room";
import Contact from "./Contact";

import AnimatedSwitch from "./AnimatedSwitch";
import AnimatedRoute from "./AnimatedRoute";

const Routes = () => {
  return (
    <AnimatedSwitch animationClassName="fade" animationTimeout={300}>
      <AnimatedRoute
        exact
        path="/contact"
        // render={(routeProps) => <Contact {...routeProps} />}
        render={(routeProps) => <Contact {...routeProps} />}
      />
      <AnimatedRoute exact path="/room" render={() => <Room />} />

      <AnimatedRoute exact path="/about" render={() => <About />} />

      <AnimatedRoute
        exact
        path="/"
        render={(renderProps) => <Home {...renderProps} />}
      />
    </AnimatedSwitch>
  );
};

export default Routes;
