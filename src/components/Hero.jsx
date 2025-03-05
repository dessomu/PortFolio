import React from "react";
import codingImg from "../assets/illustration.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div style={{ width: "50%" }}>
        <h2 className="animated-heading">Hello, I’m Somnath</h2>
        <p>
                  I love creating web applications that address real-world problems and look good. A front end should be simple and useful, not complex and overwhelming. I also love to iterate over new ideas and implement them in real-life applications.
 
        </p>
      </div>

      <img src={codingImg} alt="Coding" />
    </section>
  );
}

export default Hero;
