import React, { useState } from "react";
import axios from "axios";
import { ReactComponent as Instagram } from "./assets/icons/instagram.svg";
import { ReactComponent as Youtube } from "./assets/icons/video.svg";
import { ReactComponent as Whatsapp } from "./assets/icons/whatsapp.svg";

const Contact = (props) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${email}`, message);
    await axios.post("/api/email", {
      email: email,
      message: message,
    });
    setEmail("");
    setMessage("");

    alert("Thank you for sending a message, i will get back to you shortly");
  };

  return (
    <header className="contact">
      <div className="contact__banner"></div>

      <div className="contact__container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="email"
              id="email"
              name="email"
              className="form__input"
              placeholder="g"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <textarea
              value={message}
              placeholder="hello"
              className="form__textarea"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <label className="form__label">Message</label>
          </div>
          <button className="form__button" type="submit">
            Send a message
          </button>
        </form>
        <div className="contact__info">
          <h2>So glad you reached here</h2>
          <p>
            This is a demo site is to potentinal employers, for buisness
            enquires you can use this form or visit my website
          </p>
          <a href="https://hm7.herokuapp.com">Visit my website</a>
        </div>
      </div>

      <div className="contact__social">
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
    </header>
  );
};

export default Contact;
