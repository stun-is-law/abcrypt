import React from "react";
import { Link } from "react-router-dom";
import "../styles/Pages.css";

const Security = () => {
  return (
    <main className="security">
      <h1>WARNING!</h1>
      <p>
        {" "}
        The encryption code was written by an amateur. It is probably very easy
        to crack, moreover anyone who enters this site can read your encrypted
        message. Therefore,{" "}
        <span className="bold">
          please do not provide any sensitive personal information here
        </span>
        . I am not responsible for the disclosure of your information through
        this site.{" "}
      </p>
      <p>
        <span className="bold">Use at your own risk</span>.
      </p>
      <p>
        You can get to know the reason of bringing this site to life at{" "}
        <Link className="link bold" to="/about">
          about
        </Link>
        .
      </p>
    </main>
  );
};

export default Security;
