import React from "react";
import codingImg from "../assets/illustration.png";

function Hero() {
  return (
    <section id="hero">
      <div style={{ width: "50%" }}>
        <h2 className="animated-heading">Hello, I’m Somnath</h2>
        <p>
          Crafting lovable UIs for web applications in React. A frontend should
          be simple and useful, not complex and overwhelming. 
        </p>
      </div>

      <img src={codingImg} alt="Coding" />
    </section>
  );
}

export default Hero;
