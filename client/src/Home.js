import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Instagram } from "./assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "./assets/icons/video.svg";
import { ReactComponent as Whatsapp } from "./assets/icons/whatsapp.svg";

const Home = (props) => {
  return (
    <header className="home__header">
      <h1 className="home__title">build upon your passion</h1>
      <div className="home__contact">
        <a href="/" className="icon__link ">
          <Instagram className="icon__link--instgram" />
        </a>

        <a href="/" className="icon__link ">
          <Youtube className="icon__link--youtube" />
        </a>

        <a href="/" className="icon__link ">
          <Whatsapp className="icon__link--whatsapp" />
        </a>
      </div>

      <div className="home__banner">
        {/* <Link to="/about">Click Me</Link> */}
      </div>
    </header>
  );
};

export default Home;
