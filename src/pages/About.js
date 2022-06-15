import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

const About = () => {
  return (
    <main className="about">
      <h1>Why someone did this app?</h1>
      <p>
        This app was created to demonstrate my skills as a frontend developer.
        The main goal was to create design, not mechanics. However, I believe
        that encountering this site can be an entertaining experience for the
        average user.
      </p>
      <p>
        The source code for this app will be soon avaiable on my GitHub profile
        with free license.
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
