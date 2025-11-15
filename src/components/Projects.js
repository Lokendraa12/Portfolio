import React from "react";
import weather from "../assets/weather-app.png";
import calculator from "../assets/calculator.png";
import ordiio from "../assets/ordio-app.png"; 
import shopme from "../assets/shopme.png";
import amazon from "../assets/amazon-clone.png";

export default function Projects() {
  const projects = [
    {
      img: weather,
      title: "Weather App",
      desc: "This app shows real-time weather using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript.",
      link: "https://github.com/Lokendraa12/weather-app",
    },
    {
      img: calculator,
      title: "React Calculator",
      desc: "A modern calculator app built with React and Tailwind CSS. Fully responsive and fast.",
      link: "https://github.com/Lokendraa12/React-calculator",
    },
    {
      img: shopme,
      title: "ShopMe Ecommerce",
      desc: "An e-commerce website built using React, showcasing a modern shopping interface and responsive design.",
      link: "https://github.com/Lokendraa12/ShopMe_Ecommerce",
    },
    {
      img: amazon,
      title: "Amazon Clone",
      desc: "A static Amazon Clone website built using only HTML and CSS, replicating the Amazon homepage design and layout.",
      link: "https://github.com/Lokendraa12/Amazone",
    },
    {
      img: ordiio,
      title: "Ordiio Music App",
      desc: "A modern, fully responsive music streaming frontend built using Next.js and Tailwind CSS. Designed premium UI/UX with smooth audio controls, clean card layouts, and mobile-first responsiveness.",
      link: "https://ordio-dev-app.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1>My Projects</h1>
      <div className="projects-container">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
