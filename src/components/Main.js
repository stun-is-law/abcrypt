import React from "react";

import "../styles/Main.css";
import verticalDiamondLine from "../img/diamond-line-vertical.svg";
import diamond from "../img/diamond.svg";

const Main = () => {
  return (
    <main>
      <div className="diamond-line-vertical">
        <img src={verticalDiamondLine} alt="vertical line" />
      </div>
      <div className="left-column">
        <h1>
          Your secrets are safe with{" "}
          <span className="background-gradient-violet">
            ab<span>crypt</span>
          </span>
        </h1>
        {/* <img
          className="company-name-text-gradient"
          src={companyNameGradient}
          alt="company name - abcrypto"
        /> */}
        <ul>
          <li>
            <img src={diamond} alt="bullet" />
            <p>
              <span className="bold">advanced crypting technology</span>{" "}
              impossible to crack for regular person
            </p>
          </li>
          <li>
            <img src={diamond} alt="bullet" />
            <p>
              create <span className="bold">random, personal key</span> and
              maximize security
            </p>
          </li>
          <li>
            <img src={diamond} alt="bullet" />
            <p>
              choose from <span className="bold">one hundred</span> pre-made key
              templates
            </p>
          </li>
        </ul>
      </div>
      <div className="right-column">
        <h1>
          Try <span className="text-violet-gradient">it</span> yourself!
        </h1>
        <div className="textarea-dobule-background">
          <textarea placeholder="type or paste text to encrypt here"></textarea>
        </div>
        <div className="textarea-dobule-background">
          <textarea placeholder="encrypted text will appear here"></textarea>
        </div>
      </div>
    </main>
  );
};

export default Main;
