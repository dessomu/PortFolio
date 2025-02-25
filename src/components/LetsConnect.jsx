import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import email from "../assets/email.png";
import { Howl } from "howler";
import clickSound from "../assets/clickm.mp3";

const sound = new Howl({
  src: [clickSound],
  volume: 0.4,
});

function LetsConnect() {
  return (
    <section id="lets-connect">
      <h2 className="animated-heading">Lets Connect</h2>
      <div className="social-links">
        <a
          onMouseDown={() => sound.play()}
          href="https://www.linkedin.com/in/somnath-baidya-668085209/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <a
          onMouseDown={() => sound.play()}
          href="https://github.com/dessomu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="github"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
        <a
          onMouseDown={() => sound.play()}
          href="mailto:somnathbaidya82@gmail.com"
        >
          <img
            src={email}
            alt="email"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
      </div>
    </section>
  );
}

export default LetsConnect;
