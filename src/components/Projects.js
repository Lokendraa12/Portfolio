import React from "react";

import weather from "../assets/weather-app.png";
import calculator from "../assets/calculator.png";
import ordio from "../assets/ordio-app.png";
import shopme from "../assets/shopme.png";
import amazon from "../assets/amazon-clone.png";
import ecommerce from "../assets/ecommerce.png";
import aiface from "../assets/aiface.png";

export default function Projects() {
  const projects = [
    {
      img: weather,
      title: "Weather App",
      desc: "This app shows real-time weather using the OpenWeatherMap API. Built with HTML, CSS, and JavaScript.",
      github: "https://github.com/Lokendraa12/weather-app"
    },
    {
      img: calculator,
      title: "React Calculator",
      desc: "A modern calculator app built with React and Tailwind CSS. Fully responsive and fast.",
      github: "https://github.com/Lokendraa12/React-calculator",
    },
    {
      img: shopme,
      title: "ShopMe Ecommerce",
      desc: "An e-commerce website built using React, showcasing a modern shopping interface and responsive design.",
      link: "https://shop-me-ecommerce-2ssy7s64y-lokendra-kushwahs-projects-88561b95.vercel.app/",
      github: "https://github.com/Lokendraa12/ShopMe_Ecommerce",
    },
    {
      img: amazon,
      title: "Amazon Clone",
      desc: "A static Amazon Clone website built using only HTML and CSS, replicating the Amazon homepage design and layout.",
      github: "https://github.com/Lokendraa12/Amazone",
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
      github: "https://github.com/Lokendraa12/E_commerce-Frontend"
    },
    {
      img: aiface,
      title: "AI Face Detection",
      desc: "AI-based attendance management system that uses face recognition technology to automatically detect and mark student attendance in real time. Built using React.js, Node.js, Express.js, MongoDB, and face-api.js with a modern responsive dashboard UI.",
      link: "https://ai-attendance-frontend-rho.vercel.app/",
      github: "https://github.com/Lokendraa12/AI-ATTENDANCE-FRONTEND"
    }
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

            {
              p.link && (
                <a
                  href={p.link} 
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  View Project
                </a>
              )
            }
            {
              p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  View Code
                </a>
              )
            }
          </div>
        ))}
      </div>
    </section>
  );
}