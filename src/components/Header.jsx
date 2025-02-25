import React from "react";
import { Howl } from "howler";
import clickSound from "../assets/clicky.mp3";

const sound = new Howl({
  src: [clickSound],
});
sound.rate(1.45);

function Header() {
  return (
    <header>
      <nav>
        <a onClick={() => sound.play()} href="#tech-stack">
          Tech Stacks
        </a>
        <a onClick={() => sound.play()} href="#featured-projects">
          Projects
        </a>
        <a onClick={() => sound.play()} href="#lets-connect">
          Contact Me
        </a>
      </nav>
    </header>
  );
}

export default Header;
