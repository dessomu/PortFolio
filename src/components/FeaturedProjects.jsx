import React from "react";
import carouselImage from "../assets/carousel.png";
import todoImage from "../assets/todo.png";
import swapImage from "../assets/swapimg.png";
import weatherImage from "../assets/weather.png";
import { Howl } from "howler";
import clickCardSound from "../assets/whooseS.mp3";

const sound = new Howl({
  src: [clickCardSound],
  volume: 0.5,
});
sound.rate(0.7);

const projects = [
  {
    title: "Carousel",
    description:
      "Simple Carousel made with React. Images slide automatically and you can go to next or previous image.",
    tech: "React",
    image: carouselImage,
    link: "https://carouselsimplereact.netlify.app/",
  },
  {
    title: "Todo Application",
    description:
      "A todo app with email/password login feature. Users can create and delete their own todos.",
    tech: "React, Redux, Firebase",
    image: todoImage,
    link: "https://aquamarine-yeot-2605f6.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "A simple & useful application to get real time weather updates",
    tech: "React, weatherApi",
    image: weatherImage,
    link: "https://weatherappsimplehourlyforecast.netlify.app/",
  },
  {
    title: "Swap Image",
    description: "Drag and drop to swap the images",
    tech: "React",
    image: swapImage,
    link: "https://swapimages.netlify.app/",
  },

  // Add more projects here
];

function FeaturedProjects() {
  return (
    <>
      <section id="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />

              <a
                onMouseDown={() => sound.play()}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{project.title}</h3>
              </a>
              <p>{project.description}</p>
              <p className="tech-used">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FeaturedProjects;
