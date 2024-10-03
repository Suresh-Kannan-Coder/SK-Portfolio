import React from "react";
import "./Hnav.css";

const Hnav = () => {
  return (
    <div>
      <header className="header">
        <a href="#Skills" className="logo" title="Suresh">
          Suresh <span className="logo-inf">.</span>
        </a>
        <nav className="navbar">
          <a href="#Home" title="Home">
            Home
          </a>
          <a href="#About" title="About">
            About
          </a>
          <a href="#Skills" title="Skills">
            Skills
          </a>
          <a href="#Project" title="Projects">
            Projects
          </a>
          <a href="#Contact" title="Contact">
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Hnav;
