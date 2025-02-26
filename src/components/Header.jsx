import React, { useState } from "react";
import { Howl } from "howler";
import clickSound from "../assets/clicky.mp3";

const sound = new Howl({
  src: [clickSound],
});
sound.rate(1.45);

function Header() {
  const [activeLink, setActiveLink] = useState("#home"); // Default active link

  const handleClick = (e, section) => {
    e.preventDefault(); // Prevents full-page reload
    sound.play();
    setActiveLink(section); // Updates active link
    document.querySelector(section)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header>
      <nav>
        <a
          onClick={(e) => handleClick(e, "#home")}
          href="#home"
          className={activeLink === "#home" ? "active" : ""}
        >
          Home
        </a>
        <a
          onClick={(e) => handleClick(e, "#tech-stack")}
          href="#tech-stack"
          className={activeLink === "#tech-stack" ? "active" : ""}
        >
          Tech Stacks
        </a>
        <a
          onClick={(e) => handleClick(e, "#featured-projects")}
          href="#featured-projects"
          className={activeLink === "#featured-projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          onClick={(e) => handleClick(e, "#lets-connect")}
          href="#lets-connect"
          className={activeLink === "#lets-connect" ? "active" : ""}
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}

export default Header;
