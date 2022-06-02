import React from "react";
import "../styles/Header.css";
import logoTextSmall from "../img/logo-small-gradient-filled-text.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoTextSmall} alt="abcrypt logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="stanpages.com">encrypt</a>
          </li>
          <li>
            <a href="stanpages.com" className="active">
              about
            </a>
            <span className="navigation-underline"></span>
          </li>
          <li>
            <a href="stanpages.com">security</a>
          </li>
          <li>
            <a href="stanpages.com">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
