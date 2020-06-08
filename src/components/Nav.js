import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__icon">icon</div>
      <ul className="nav__ul">
        <li className="nav__li">
          <a href="/">Home</a>
        </li>
        <li className="nav__li">
          <a href="/about">About</a>
        </li>
        <li className="nav__li">
          <a href="/service">Service</a>
        </li>
        <li className="nav__li">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
