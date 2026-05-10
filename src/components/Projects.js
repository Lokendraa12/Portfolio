import React from "react";

import weather from "../assets/weather-app.png";
import calculator from "../assets/calculator.png";
import ordio from "../assets/ordio-app.png";
import shopme from "../assets/shopme.png";
import amazon from "../assets/amazon-clone.png";
import ecommerce from "../assets/logo.png";

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
      link: "https://shop-me-ecommerce-2ssy7s64y-lokendra-kushwahs-projects-88561b95.vercel.app/",
    },
    {
      img: amazon,
      title: "Amazon Clone",
      desc: "A static Amazon Clone website built using only HTML and CSS, replicating the Amazon homepage design and layout.",
      link: "https://github.com/Lokendraa12/Amazone",
    },
    {
      img: ordio,
      title: "Ordiio Music App",
      desc: "A modern, fully responsive music streaming frontend built using Next.js and Tailwind CSS.",
      link: "https://ordio-dev-app.vercel.app/",
    },
    {
      img: ecommerce,
      title: "E-Commerce App",
      desc: "A full stack e-commerce app with product browsing, cart, orders, authentication, and responsive UI.",
      link: "https://e-commerce-frontend-rose-omega.vercel.app/",
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

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}