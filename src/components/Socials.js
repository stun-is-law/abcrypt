import React from "react";
import githubIcon from "../img/icons/icon_github.svg";
import instagramIcon from "../img/icons/icon_instagram.svg";
import linkedinIcon from "../img/icons/icon_linkedin.svg";

const Socials = () => {
  return (
    <div className="socials">
      <ul>
        <li>
          <img src={linkedinIcon} alt="linkedIn" />
          <a
            className="link bold"
            href="https://www.linkedin.com/in/stanis%C5%82aw-jarocki-6a268421b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <img src={githubIcon} alt="github" />
          <a
            className="link bold"
            href="https://github.com/StanLee77"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <img src={instagramIcon} alt="instagram" />
          <a
            className="link bold"
            href="https://www.instagram.com/stan_pages/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
