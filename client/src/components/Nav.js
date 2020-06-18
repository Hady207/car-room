import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__icon">
        <img src={require("../assets/icons/logo_transparent.png")} alt="logo" />
      </div>
      <ul className="nav__ul">
        <li className="nav__li">
          <Link to="/">Home</Link>
        </li>
        <li className="nav__li">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__li">
          <Link to="/room">Room</Link>
        </li>
        <li className="nav__li">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
