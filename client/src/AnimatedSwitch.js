import React from "react";

import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimatedSwitch = ({ animationClassName, animationTimeout, children }) => {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames={animationClassName}
            timeout={animationTimeout}
          >
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default AnimatedSwitch;
