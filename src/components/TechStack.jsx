import React from "react";

const techStacks = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
];

function TechStack() {
  return (
    <section id="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-stack-container">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            style={{
              border: `solid 0.1px ${tech.color}`,
            }}
            className="tech-stack-item"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
