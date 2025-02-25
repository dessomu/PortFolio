import React from "react";
import codingImg from "../assets/coding.png";

function Hero() {
  return (
    <section id="hero">
      <div style={{ width: "50%" }}>
        <h2 className="animated-heading">Hello, I’m Somnath</h2>
        <p>
          A Front-End developer who loves to design appealing and functional web applications that meet users’ expectations of having a wow experience interacting with the product and understanding the workflows. 
        </p>
      </div>

      <img src={codingImg} alt="Coding" />
    </section>
  );
}

export default Hero;
