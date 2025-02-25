import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import FeaturedProjects from "./components/FeaturedProjects";
import LetsConnect from "./components/LetsConnect";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <LetsConnect />
      </main>
    </div>
  );
}

export default App;
