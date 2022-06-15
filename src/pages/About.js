import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

const About = () => {
  return (
    <main className="about">
      <h1>Why someone did this app?</h1>
      <p>
        This app was created to demonstrate my skills as a frontend developer.
        The main goal was to create design, not mechanics.However, I believe
        exploring this site can be an entertaining experience, so enjoy!
      </p>
      <p>
        You can learn more about me and my other projects at{" "}
        <Link className="link bold" to="/contact">
          contact
        </Link>
        .
      </p>
    </main>
  );
};

export default About;
