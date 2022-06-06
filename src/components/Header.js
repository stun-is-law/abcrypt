import React from "react";
import "../styles/Header.css";
import logoTextSmall from "../img/logo-small-gradient-filled-text.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="stanpages.com">
          <img src={logoTextSmall} alt="abcrypt logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="stanpages.com" title="encrypt">
              encrypt
            </a>
            <span className="navigation-underline"></span>
          </li>
          <li className="active">
            <a href="stanpages.com" title="about">
              about
            </a>
            <span className="navigation-underline"></span>
          </li>
          <li>
            <a href="stanpages.com" title="security">
              security
            </a>
            <span className="navigation-underline"></span>
          </li>
          <li>
            <a href="stanpages.com" title="contact">
              contact
            </a>
            <span className="navigation-underline"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
