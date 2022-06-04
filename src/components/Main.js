import React from "react";

import "../styles/Main.css";

const Main = () => {
  return (
    <main>
      <span className="vertical-line"></span>
      <div className="left-column">
        <h1>
          Your secrets are safe with{" "}
          <span className="text-gradient">abcrypt</span>
        </h1>
        <ul>
          <li>
            <p>
              <span className="bold">advanced crypting technology</span> so hard
              to crack
            </p>
          </li>
          <li>
            <p>
              create <span className="bold">random, personal key</span> and
              maximize security
            </p>
          </li>
          <li>
            <p>
              choose from <span className="bold">one hundred</span> pre-made key
              templates
            </p>
          </li>
        </ul>
      </div>
      <div className="right-column">
        <h1>
          Try <span className="text-gradient">it</span> yourself!
        </h1>
        <textarea placeholder="type or paste text to encrypt here"></textarea>
        <textarea placeholder="encrypted text will appear here"></textarea>
      </div>
    </main>
  );
};

export default Main;
