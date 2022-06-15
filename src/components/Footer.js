import React from "react";
import Socials from "./Socials";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <Socials />
      <p>
        made by <span className="text-gradient">Stanlee77</span> ~ copyright
        2022 © abcrypt.com
      </p>
    </footer>
  );
};

export default Footer;
