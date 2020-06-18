import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./sass/main.scss";
import Nav from "./components/Nav";
import Routes from "./Routes";
// import CarModel from "./CarModel";

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
