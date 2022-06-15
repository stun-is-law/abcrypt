import React from "react";
import "../styles/Pages.css";

const PageNotFound = () => {
  return (
    <main className="page-not-found">
      <h1>
        Unfortunately, <span className="text-gradient">the Page</span> does not
        exist! :(
      </h1>
    </main>
  );
};

export default PageNotFound;
