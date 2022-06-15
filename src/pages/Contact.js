import React from "react";
import Socials from "../components/Socials";
import "../styles/Pages.css";
import profilePhoto from "../img/profile-photo-sqr.jpg";
import reactMini from "../img/icons/mini-react.svg";
import javascriptMini from "../img/icons/mini-javascript.svg";
import cssMini from "../img/icons/mini-css.svg";
import htmlMini from "../img/icons/mini-html.svg";
import figmaMini from "../img/icons/mini-figma.svg";

const Contact = () => {
  return (
    <main className="contact">
      <h1>Who am I?</h1>
      <div className="author">
        <img src={profilePhoto} alt="author" />
        <p className="description">
          Hi, I'm Junior Frontend Developer Stanley Jarocki. If you see
          potential here I'm open for collaboration and job offers.
        </p>
        <div className="minis">
          <img src={htmlMini} alt="html" />
          <img src={cssMini} alt="css" />
          <img src={javascriptMini} alt="javascript" />
          <img src={reactMini} alt="react" />
          <img src={figmaMini} alt="figma" />
        </div>
        <Socials />
      </div>
    </main>
  );
};

export default Contact;
